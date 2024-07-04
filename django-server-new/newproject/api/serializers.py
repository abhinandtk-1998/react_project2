from rest_framework import serializers
from .models import CustomUser, developers, Project

class UserSerialisers(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'

class UserLogInSerialisers(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

class RegSerializer(serializers.ModelSerializer):
    user = UserSerialisers()

    class Meta:
        model = developers
        fields = '__all__'

class WorkSerialisers(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'

class EditDevSerializer(serializers.ModelSerializer):
    user = UserSerialisers()

    class Meta:
        model = developers
        fields = ['id', 'first_name', 'last_name', 'email', 'user']