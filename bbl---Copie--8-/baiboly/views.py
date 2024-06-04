from django.shortcuts import render, redirect
import json,os,textwrap 
from .models import *
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import serializers

class baiboly_G():
    def replaceStrToYaveh(listContent):
        contents=[]
        for content in listContent:
            #print(type(content))
            content = str(content).replace("YHWH ","Yaveh ")
            #print(content)
            contents.append(content)
        
        return contents
        
    
    def baiboly(b):
        bbl=b.split(' ')
        print(bbl)
        bbl_=baiboly.objects.get(bible=bbl[0])
        json_str=bbl_.content_bible
        data_content=json.loads(json_str)
        
        bb_chpt=data_content[f"Chapitre {bbl[1]}"]
        bb_v=bbl[3]
        bb_vr=bb_v.split(',')
        #print(f"bb_vr({bb_vr})")
        #print(len(bb_vr))
        if len(bb_vr)==1:
            bb_vrs=bb_vr[0].split('-')
            #print(f"bb_vrs({bb_vrs})")
            if len(bb_vrs)==1:
            #    print("len 1")
                bbl1=''.join(bb_chpt[int(bb_vrs[0])-1])
                bbl2=''
                bbl3=''
            else:
                bbl1= ''.join(bb_chpt[int(bb_vrs[0])-1:int(bb_vrs[1])])
                bbl2=''
                bbl3=''
                #bbl=f'" {bbl_} "'

        elif len(bb_vr)==2:
            bb_vrs1=bb_vr[0].split('-')
            bb_vrs2=bb_vr[1].split('-')
            #print(f"bb_vrs({bb_vrs})")
            if len(bb_vrs1)==1 and len(bb_vrs2)==1:
            #    print("len 1")
                bbl1=''.join(bb_chpt[int(bb_vrs1[0])-1])
                bbl2=''.join(bb_chpt[int(bb_vrs2[0])-1])
                bbl3=''
            elif len(bb_vrs1)==2 and len(bb_vrs2)==1:
            #    print("len 1")
                bbl1=''.join(bb_chpt[int(bb_vrs1[0])-1:int(bb_vrs1[1])])
                bbl2=''.join(bb_chpt[int(bb_vrs2[0])-1])
                bbl3=''
            elif len(bb_vrs1)==1 and len(bb_vrs2)==2:
            #    print("len 1")
                bbl1=''.join(bb_chpt[int(bb_vrs1[0])-1])
                bbl2=''.join(bb_chpt[int(bb_vrs2[0])-1:int(bb_vrs2[1])])
                bbl3=''
            elif len(bb_vrs1)==2 and len(bb_vrs2)==2:
            #    print("len 1")
                bbl1=''.join(bb_chpt[int(bb_vrs1[0])-1:int(bb_vrs1[1])])
                bbl2=''.join(bb_chpt[int(bb_vrs2[0])-1:int(bb_vrs2[1])])
                bbl3=''
            
            else:
                bbl1=''
                bbl2=''
                bbl3=''

        return bbl1.replace("YHWH ","Yaveh "),bbl2.replace("YHWH ","Yaveh ")

@login_required
def index(request):
    return render(request, 'index.html')

def home(request):
    #if User.is_authenticated:
    #    return redirect(index)
    #else:
        return render(request, 'home.html')

def baibl(request):
    bbl=trad.objects.all()
    if request.method == 'POST':
        boky = request.POST.get('boky', '')
        toko = request.POST.get('toko', '')
        andininy = request.POST.get('andininy', '')
        
        b=f"{boky} {toko} : {andininy}"

        content_bible=baiboly_G.baiboly(b)
        
        
        #if request.method == 'POST':
        #    print(request.POST)
        context={
            'titre':b,
            'contents':content_bible,
            'bibles':bbl
        }
        return render(request,'viewdetail.html',context) 

    return render(request,'home_baiboly.html',{'bibles':bbl})

def view_all_content(request, bble):
    bbl_cls=cls_baibl.objects.all()
    bbl=bble.split(' ')
    bbl_=baiboly.objects.get(bible=bbl[0])
    json_str=bbl_.content_bible
    data_content=json.loads(json_str)
    
    bb_chpt=data_content[f"Chapitre {bbl[1]}"]
    #print(baiboly_G.replaceStrToYaveh(bb_chpt))
    context={
            'titre':f"{bbl[0]} {bbl[1]}",
            'contents':baiboly_G.replaceStrToYaveh(bb_chpt),
            'bibles':bbl_cls
        }
    return render(request, 'view_all_content.html',context)
    pass

class AppView_All_Content_View(APIView):
    def post(self, request):
        boky = request.data.get('boky')
        bbl_cls=cls_baibl.objects.all()
        bbl=boky.split(' ')
        bbl_=baiboly.objects.get(bible=bbl[0])
        json_str=bbl_.content_bible
        data_content=json.loads(json_str)

        bb_chpt=data_content[f"Chapitre {bbl[1]}"]
        print(bb_chpt)
        # toko = request.data.get('toko')

        # print(boky)
        # print(toko)

        # verset_bible = vrs_baibl.objects.get(bible_vrs=boky,chptr=int(toko))
        # print(verset_bible.nbr_vrs)
        return Response((baiboly_G.replaceStrToYaveh(bb_chpt)))
        # serializer = TradSerializer(verset_bible, many=True)
        # return Response({'list_baiboly': "lst_bbl"})
        # return Response(serializer.data)
        # response = Response({
        #         'list_baiboly': lst_bbl,
        #         'message': 'Authentification réussie'
        #     })
        # return response
    

class AppVrs_baiboly_View(APIView):
    def post(self, request):
        boky = request.data.get('boky')
        toko = request.data.get('toko')

        # print(boky)
        # print(toko)

        verset_bible = vrs_baibl.objects.get(bible_vrs=boky,chptr=int(toko))
        # print(verset_bible.nbr_vrs)
        return Response(verset_bible.nbr_vrs)
        # serializer = TradSerializer(verset_bible, many=True)
        # return Response({'list_baiboly': "lst_bbl"})
        # return Response(serializer.data)
        # response = Response({
        #         'list_baiboly': lst_bbl,
        #         'message': 'Authentification réussie'
        #     })
        # return response
    
class AppListBaibolyTrad(APIView):
    def get(self, request):
        lst_bbl = trad.objects.all()
        print(lst_bbl)
        serializer = TradSerializer(lst_bbl, many=True)
        return Response(serializer.data)
        # response = Response({
        #         'list_baiboly': lst_bbl,
        #         'message': 'Authentification réussie'
        #     })
        # return response
    
class AppListBaibolyCat(APIView):
    def get(self, request):
        lst_bbl_cat = cls_baibl.objects.all()
        # print(lst_bbl)
        serializer = CatSerializer(lst_bbl_cat, many=True)
        return Response(serializer.data)

class TradSerializer(serializers.ModelSerializer):
    class Meta:
        model = trad
        fields = '__all__'

class CatSerializer(serializers.ModelSerializer):
    class Meta:
        model = cls_baibl
        fields = '__all__'

class BokySerializer(serializers.ModelSerializer):
    class Meta:
        model = baiboly
        fields = '__all__'