from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *
import hashlib

password = "mypassword"
password_hash = hashlib.sha256(password.encode()).hexdigest()
print(password_hash)

# admin_role = Role_user.objects.create(name='Admin')
# user_role = Role_user.objects.create(name='User')
# Role_user.objects.create(name='musicien')

class UserSerializer(serializers.ModelSerializer):
    role = serializers.PrimaryKeyRelatedField(queryset=Role_user.objects.all(), required=False)

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'role')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        # Hashage du mot de passe avec SHA256
        password_hash = hashlib.sha256(password.encode()).hexdigest()
        user = User(**validated_data)
        # print(user)
        # user.set_password(password_hash)
        user.save()
        return user