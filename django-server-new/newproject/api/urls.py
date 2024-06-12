from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.registerview,name='register'),
    path('login/', views.loginview,name='login'),
    path('reg_details/', views.reg_details, name='reg_details')
    # path('data/',views.getdata,name='data'),
    
]