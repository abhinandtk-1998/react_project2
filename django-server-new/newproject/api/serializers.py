from rest_framework import serializers
from .models import CustomUser

class UserSerialisers(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'

# class UserLoginSerialisers(serializers.Serializer):
#     username = 