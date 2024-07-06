from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from .models import CustomUser, developers, Project
from .serializers import UserSerialisers, UserLogInSerialisers, RegSerializer, WorkSerialisers, EditDevSerializer
from django.contrib.auth import authenticate, login
from rest_framework import permissions
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.core import serializers
import json
from django.contrib.auth.hashers import check_password
from django.contrib.auth import get_user_model



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
            tokens, created= Token.objects.get_or_create(user=user)
            cuser = CustomUser.objects.get(username=uname)

            if created:
                token = created

            else:
                token = tokens
            
            if cuser.is_staff == 1:
                user_details_dict = {'token':token.key,'first_name': cuser.first_name, 'last_name':cuser.last_name, 'username': cuser.username, 
                                 'email':cuser.email,'is_staff':cuser.is_staff,'user_type':cuser.user_type}
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
                                 'email':cuser.email,'is_staff':cuser.is_staff,'user_type':cuser.user_type,'address':userdetails.address, 'course': userdetails.course,
                                 'department' : userdetails.department}
            
            return JsonResponse(user_details_dict)
        else:
            return Response(serialiser.errors)
            # return Response({'error': 'Invalid cridential'})

# @api_view(['GET'])
# def reg_details(request):

#     list = {}

#     duser = developers.objects.filter(status = 0)
#     i = 0
#     for d in duser:
#         list[i] = [i, d.user.first_name, d.user.last_name, d.user.email, d.department, d.course, d.id,]
#         i += 1

#     print(list)


#     return JsonResponse(list)

# @permission_classes([IsAuthenticated])
@api_view(['GET'])
def reg_details(request):
    reg_developers = developers.objects.filter(status=0)
    serializer = RegSerializer(reg_developers, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['PUT'])
def approve_dev(request):
    id = request.GET.get('id')

    if id:

        dev = developers.objects.get(id=id)
        dev.status = 1
        dev.save()

        return JsonResponse({'success': 'Developer registration approved successfully'})

    else:
        return JsonResponse({'error': 'something went wrong'})



@api_view(['DELETE'])
def disapprove_dev(request):
    id = request.GET.get('id')

    if id:
    
        dev = developers.objects.get(id=id)
        cuser = CustomUser.objects.get(id=dev.user.id)

        dev.delete()
        cuser.delete()

        return JsonResponse({'success': 'Developer registration disapproved successfully'})

    else:
        return JsonResponse({'error': 'An Error occured'})
    

@api_view(['GET'])
def dev_details(request):
    user_list = CustomUser.objects.filter(user_type = 1)
    developers_details = developers.objects.filter(status=1, user__in=user_list)
    serializer = RegSerializer(developers_details, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['PUT'])
def dev_to_tl(request):
    id = request.GET.get('id')

    if id:

        dev = developers.objects.get(id=id)
        cuser = CustomUser.objects.get(id = dev.user.id)
        cuser.user_type = 2
        cuser.save()

        return JsonResponse({'success': 'Developer Promoted as TL'})

    else:
        return JsonResponse({'error': 'something went wrong'})
    
@api_view(['PUT'])
def tl_to_dev(request):
    id = request.GET.get('id')

    if id:

        dev = developers.objects.get(id=id)
        cuser = CustomUser.objects.get(id = dev.user.id)
        cuser.user_type = 1
        cuser.save()

        return JsonResponse({'success': 'TL converted  as Developer'})

    else:
        return JsonResponse({'error': 'something went wrong'})
    

@api_view(['GET'])
def tl_details(request):
    user_list = CustomUser.objects.filter(user_type = 2)
    developers_details = developers.objects.filter(status=1, user__in=user_list)
    print(developers_details)
    serializer = RegSerializer(developers_details, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def add_project(request):


    serialiser=WorkSerialisers(data=request.data)
    if serialiser.is_valid():
        
        

        prj = Project(client_name=request.data.get('client_name'),client_address=request.data.get('client_address'),
                         project_name=request.data.get('project_name'),description=request.data.get('description'),
                         start_date=request.data.get('start_date'), end_date=request.data.get('end_date'),
                         attachment=request.data.get('attachment')
                          )
        prj.save()
        print(prj)
        return JsonResponse({'success':'project added successfully'})
    else:
        return Response(serialiser.errors)
    

@api_view(['GET'])
def project_details(request):
    project_details = Project.objects.all()
    serializer = WorkSerialisers(project_details, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['PUT'])
def assign_work(request):
    data = json.loads(request.body)
    p_id = data.get('m_id')
    tl_id = data.get('tl_id')


    if p_id and tl_id:

        prj = Project.objects.get(id=p_id)
        tl = developers.objects.get(id=tl_id)
        prj.teamlead_details = tl
        prj.save()

        return JsonResponse({'success': 'Work Successfully assigned to Teamlead'})

    else:
        return JsonResponse({'error': 'something went wrong'})


@api_view(['GET'])
def tl_prj_details(request):

    # data = json.loads(request.body)
    # id = data.get('id')

    id = request.GET.get('id')
    # id = int(id_d)

    print(id)

    developers_details = developers.objects.get(id = id)
    cuser = CustomUser.objects.get(id = developers_details.user.id)
    # print(developers_details)
    print(cuser)
    serializer = UserSerialisers(cuser)
    return JsonResponse(serializer.data, safe=False)

# @api_view(['GET'])
# def project_details_tl(request):

#     token = request.headers.get('Authorization')

#     token = token.split(' ')[1] if ' ' in token else token



#     user = CustomUser.objects.all()
#     for u in user:
#         token_d = Token.objects.get(user=u)
#         print(token_d)
#         print()
#         print(token)
#         print()
#         print()
#         if token == token_d:
#             user_tl = u
#             print("true")
#             break

#     prj = Project.objects.filter(teamlead_details=user_tl)

#     serializer = WorkSerialisers(prj, many=True)
#     return JsonResponse(serializer.data, safe=False)


@api_view(['GET'])
def project_details_tl(request):
    token = request.headers.get('Authorization')
    if not token:
        return JsonResponse({'error': 'Token not provided'}, status=400)

    token = token.split(' ')[1] if ' ' in token else token

    try:
        token_obj = Token.objects.get(key=token)
        user_tl = token_obj.user  # This is your CustomUser instance
        dev = developers.objects.get(user = user_tl)

        prj = Project.objects.filter(teamlead_details=dev)
        serializer = WorkSerialisers(prj, many=True)
        return JsonResponse(serializer.data, safe=False)
    except Token.DoesNotExist:
        return JsonResponse({'error': 'Invalid token'}, status=400)


@api_view(['PUT'])
def assign_work_tl(request):
    data = json.loads(request.body)
    p_id = data.get('m_id')
    dev_id = data.get('dev_id')


    if p_id and dev_id:

        prj = Project.objects.get(id=p_id)
        dev = developers.objects.get(id=dev_id)
        prj.developer_details = dev
        prj.save()

        return JsonResponse({'success': 'Work Successfully assigned to Developer'})

    else:
        return JsonResponse({'error': 'something went wrong'})



@api_view(['GET'])
def dev_details_tl(request):
    user_list = CustomUser.objects.filter(user_type = 1)
    developers_details = developers.objects.filter(status=1, user__in=user_list)
    print(developers_details)
    serializer = RegSerializer(developers_details, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def project_details_dev(request):
    token = request.headers.get('Authorization')
    if not token:
        return JsonResponse({'error': 'Token not provided'}, status=400)

    token = token.split(' ')[1] if ' ' in token else token

    try:
        token_obj = Token.objects.get(key=token)
        user_tl = token_obj.user  # This is your CustomUser instance
        dev = developers.objects.get(user = user_tl)

        prj = Project.objects.filter(developer_details=dev)
        serializer = WorkSerialisers(prj, many=True)
        return JsonResponse(serializer.data, safe=False)
    except Token.DoesNotExist:
        return JsonResponse({'error': 'Invalid token'}, status=400)


@api_view(['GET'])
def developer_profile(request):
    token = request.headers.get('Authorization')
    if not token:
        return JsonResponse({'error': 'Token not provided'}, status=400)

    token = token.split(' ')[1] if ' ' in token else token

    try:
        token_obj = Token.objects.get(key=token)
        user_dev = token_obj.user  # This is your CustomUser instance
        dev = developers.objects.get(user = user_dev)

        serializer = RegSerializer(dev)
        return JsonResponse(serializer.data, safe=False)
    except Token.DoesNotExist:
        return JsonResponse({'error': 'Invalid token'}, status=400)
    


@api_view(['PUT'])
# @permission_classes([IsAuthenticated])
def edit_profile(request):
    serialiser=EditDevSerializer(data=request.data)

    print(serialiser)

    if serialiser.is_valid():

        dev = developers.objects.get(id=request.data.get('id'))
        
        dev.address = request.data.get('address')
        dev.course = request.data.get('course')
        dev.certificate = request.data.get('file')
        dev.department = request.data.get('department')

        dev.save()

        user = CustomUser.objects.get(id = dev.user.id)

        user.first_name = request.data.get('first_name')
        user.last_name = request.data.get('last_name')
        user.username = request.data.get('username')
        user.email = request.data.get('email')

        user.save()


        # user = CustomUser.objects.create_user(first_name=request.data.get('first_name'),last_name=request.data.get('last_name'),
        #                                       password=request.data.get('password'),username=request.data.get('username'),
        #                                       email=request.data.get('email'))
        
        # dev = developers(user=user,address=request.data.get('address'),course=request.data.get('course'),
        #                  certificate=request.data.get('file'),department=request.data.get('department') )
        # dev.save()
        # token = Token.objects.create(user=user)


        return JsonResponse({'success': 'Profile updated successfully'})
    else:
        return Response(serialiser.errors)
    

@api_view(['POST'])
def check_password(request):
    token = request.headers.get('Authorization')
    if not token:
        return Response({'error': 'Token not provided'}, status=400)

    token = token.split(' ')[1] if ' ' in token else token

    pword = request.data.get('password')
    if not pword:
        return Response({'error': 'Password not provided'}, status=400)

    try:
        token_obj = Token.objects.get(key=token)
        user = token_obj.user  # This is your user instance
        if check_password(pword, user.password):
            return Response({'True': 'Password is matching'})
        else:
            return Response({'False': 'Password is not matching'})
        
    except Token.DoesNotExist:
        return Response({'error': 'Invalid token'}, status=400)


@api_view(['GET'])
def change_password(request):

    token = request.headers.get('Authorization')
    if not token:
        return JsonResponse({'error': 'Token not provided'}, status=400)

    token = token.split(' ')[1] if ' ' in token else token

    npword = request.data.get('newpassword')

    try:
        token_obj = Token.objects.get(key=token)
        user_dev = token_obj.user  # This is your CustomUser instance
        user_dev.password = npword
        return JsonResponse({'success': 'password changed successfully'})
 
    except Token.DoesNotExist:
        return JsonResponse({'error': 'Invalid token'}, status=400)





    















