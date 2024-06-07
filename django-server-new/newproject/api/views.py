from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from .models import CustomUser, developers
from .serializers import UserSerialisers, UserLogInSerialisers
from django.contrib.auth import authenticate, login
from rest_framework import permissions
from rest_framework.permissions import AllowAny, IsAuthenticated


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def registerview(request):
    serialiser=UserSerialisers(data=request.data)
    if serialiser.is_valid():
        user = CustomUser.objects.create_user(first_name=request.data.get('first_name'),last_name=request.data.get('last_name'),
                                              password=request.data.get('password'),username=request.data.get('username'),
                                              email=request.data.get('email'))
        
        dev = developers(user=user,address=request.data.get('address'),course=request.data.get('course'),
                         certificate=request.data.get('file'),department=request.data.get('department') )
        dev.save()
        token = Token.objects.create(user=user)
        return JsonResponse({'token':token.key})
    else:
        return Response(serialiser.errors)
    




@api_view(['POST'])
def loginview(request):
    serialiser=UserLogInSerialisers(data=request.data)
    if serialiser.is_valid():
        uname = request.data.get('username')
        pword = request.data.get('password')
        user = authenticate(username=uname,password=pword)
        print(user)
        if user:
            token = Token.objects.get(user=user)
            return JsonResponse({'token':token.key})
        else:
            return Response(serialiser.errors)
            # return Response({'error': 'Invalid cridential'})


@api_view(['GET'])
def getdata(request):

    user = developers.objects.get(user=request.user)

    return JsonResponse(user)









