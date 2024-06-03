from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .models import Userdata

from .serializers import UserdataSerializers
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView

# Create your views here.
@api_view(['GET'])
def ok(request):
    users = Userdata.objects.all()
    serialisers = UserdataSerializers(users, many=True)

    # print(users)
    # arr = []
    # for user in users:
    #     username = {'name':user.name,'age':user.age}
    #     arr.append(username)

    return  Response(serialisers.data)

@api_view(['POST'])
def post_userdata(request):
    serialiser = UserdataSerializers(data=request.data)

    if serialiser.is_valid():
        serialiser.save()
        return Response(serialiser.data)
    else:
        return Response(serialiser.errors)


@api_view(['DELETE'])
def delete_userdata(request):
    id=request.GET.get('id')

@api_view(['POST'])
def loginuser(request):
    

