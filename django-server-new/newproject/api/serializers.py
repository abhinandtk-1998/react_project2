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
    teamlead_details = RegSerializer()
    developer_details = RegSerializer()


    class Meta:
        model = Project
        fields = '__all__'