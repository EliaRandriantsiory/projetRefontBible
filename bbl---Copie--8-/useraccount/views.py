from django.shortcuts import redirect, render
from django.contrib.auth import get_user_model, login, logout, authenticate
from django.contrib.auth.decorators import permission_required
from django.contrib import messages
from .forms import *
from baiboly.views  import home
from .fls import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.middleware.csrf import get_token
from django.utils.decorators import method_decorator
# from corsheaders.decorators import cors_view
# from rest_framework_simplejwt.tokens import RefreshToken
# from .models import CustomUser
import datetime
import os
import subprocess
from django.http import HttpResponse
from django.views import View
import hashlib

User = get_user_model()
current_link=os.getcwd()

def User_profils(request):
    return render(request, 'user_profil.html')

def telecharge_fichier(request):   
    a=time.asctime()
    a=a.split(' ')
    b=a[3].split(':')
    b="".join(b)
    
    backup_file = f'db_out'
    backup_file_=f"{backup_file}.sqlite3"
    #
    if os.path.exists(f"{current_link}//{backup_file}.sqlite3"):
        backup_path = f"{current_link}//{backup_file}.sqlite3"  
        os.remove(backup_path)
        export_files_in_database(backup_file)
        backup_path = f"{current_link}//{backup_file}.sqlite3"  
    else:
        export_files_in_database(backup_file)
        backup_path = f"{current_link}//{backup_file}.sqlite3"  
    
    with open(backup_path, 'rb') as f:
        response = HttpResponse(f.read(), content_type='application/x-sqlite3')
        response['Content-Disposition'] = f'attachment; filename={backup_file_}'
    return response
   
def Appsignup(request):
    form = AuthForm()
    if request.method == 'POST':
        
        
        form.username=request.POST.get('email')
        form.password1=request.POST.get('psw')
        form.password2=request.POST.get('psw-repeat')
        #form = AuthForm(request.POST)
        
        # #print(form.username)
        # print(form.password1)
        # print(form.password2)
        if form.is_valid():
            #form.save()
            print('oui')
            
            messages.success(request, 'Création de votre compte est réussi')
            return redirect('App_signin')
        else:
            messages.success(request, 'Création de votre compte est un echec veuillez réessayer')
            print("erreur")
            return render(request, 'signup.html',{'form':form})
            
    else:
        form = AuthForm()
        return render (request, 'signup.html',{'form':form})
    
def Appsignin(request):
    if request.method == 'POST':

        username = request.POST.get('username')
        password = request.POST.get('password')
        
        user = authenticate(username=username, password=password)
        if user is not None and user.is_active:
            login(request, user)
            messages.success(request, 'Bienvenue dans votre compte')
            return redirect('index')
        else:
            messages.error(request,"Authentification échouée")  
            return render(request, 'login.html')
    else: 
        return render (request, 'login.html')

def Appsignout(request):
    logout(request)
    return redirect(home)

class AppsigninView(APIView):
    # @method_decorator(cors_view)
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        password_hash = hashlib.sha256(password.encode()).hexdigest()
        # print(password_hash)
        # Vérification de l'utilisateur et mot de passe
        user = authenticate(username=username, password=password)

        if user is not None and user.is_active:
            # Génération de jetons JWT
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)

            # Enregistrement des jetons dans la réponse
            response = Response({
                'refresh': str(refresh),
                'access': access_token,
                'message': 'Authentification réussie'
            })

            # Configuration des cookies pour les jetons
            response.set_cookie('refresh_token', str(refresh), httponly=True)
            response.set_cookie('access_token', access_token, httponly=True)

            return response
        else:
            return Response({'message': 'Authentification échouée'}, status=401)

class SignupView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        
        if serializer.is_valid():
            user = serializer.save()
            # user = serializer.save()
            
            # print(user)
            print("bonjour")
            user.save()
            
            return Response({'message': 'Inscription réussie'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutUserView(APIView):
    # permission_classes = [IsAuthenticated]
    

    def post(self, request):
        
        username = request.data.get('username')
       
        if username:
            try:
                user = User.objects.get(username=username)
                print(user)
                # refresh_token = RefreshToken.for_user(user)
                refresh_token = RefreshToken(request.data.get('refresh'))
                # print(str(refresh_token))
                refresh_token.revoke() # Utiliser la méthode 'revoke'
                return Response({'message': 'Utilisateur déconnecté'}, status=status.HTTP_205_RESET_CONTENT)
            except User.DoesNotExist:
                return Response({'message': 'Utilisateur introuvable'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'message': 'Nom d\'utilisateur manquant'}, status=status.HTTP_400_BAD_REQUEST)