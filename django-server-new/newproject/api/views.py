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
from django.core import serializers
import json


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
            cuser = CustomUser.objects.get(username=uname)
            
            if cuser.is_staff == 1:
                user_details_dict = {'token':token.key,'first_name': cuser.first_name, 'last_name':cuser.last_name, 'username': cuser.username, 
                                 'email':cuser.email,'is_staff':cuser.is_staff}
                return JsonResponse(user_details_dict)

            userdetails = developers.objects.get(user=cuser)

            print(cuser.first_name)
            print(cuser.last_name)
            print(userdetails.address)

            # user_details_dict = {}
            
            # # Serialize the userdetails object into JSON-compatible format
            # user_details_json = serializers.serialize('json', [userdetails])

            # # Convert the serialized data into a Python dictionary
            # user_details_dict = json.loads(user_details_json)[0]['fields']

            user_details_dict = {'token':token.key,'first_name': cuser.first_name, 'last_name':cuser.last_name, 'username': cuser.username, 
                                 'email':cuser.email,'is_staff':cuser.is_staff,'address':userdetails.address, 'course': userdetails.course,
                                 'department' : userdetails.department}
            
            return JsonResponse(user_details_dict)
        else:
            return Response(serialiser.errors)
            # return Response({'error': 'Invalid cridential'})











