from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.ok,name='ok'),
    path('post/', views.post_userdata,name='post'),
    
]