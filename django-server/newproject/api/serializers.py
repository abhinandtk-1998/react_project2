from rest_framework import serializers
from .models import Userdata

class UserdataSerializers(serializers.ModelSerializer):
    class Meta:
        model = Userdata
        fields = ['name','age']