from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from .models import CustomUser
from .serializers import UserSerialisers, UserLogInSerialisers
from django.contrib.auth import authenticate, login
from rest_framework import permissions
from rest_framework.permissions import AllowAny, IsAuthenticated


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def registerview(request):
    serialiser=UserSerialisers(data=request.data)
    if serialiser.is_valid():
        user = CustomUser.objects.create_user(username=request.data.get('username'),password=request.data.get('password'))
        token = Token.objects.create(user=user)
        return JsonResponse({'token':token.key})
    else:
        return Response(serialiser.errors)
    




@api_view(['POST'])
def loginview(request):
    serialiser=UserLogInSerialisers(data=request.data)
    if serialiser.is_valid():
        user = authenticate(username=request.data.get('username'),password=request.data.get('password'))
        print(user)
        if user:
            token = Token.objects.create(user=user)
            return JsonResponse({'token':token.key})
        else:
            return Response(serialiser.errors)







