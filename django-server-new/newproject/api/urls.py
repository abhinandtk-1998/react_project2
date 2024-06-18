from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.registerview,name='register'),
    path('login/', views.loginview,name='login'),
    path('reg_details/', views.reg_details, name='reg_details'),
    path('approve_dev/', views.approve_dev, name='approve_dev'),
    path('disapprove_dev/', views.disapprove_dev, name='disapprove_dev'),
    path('dev_details/', views.dev_details, name='dev_details'),
    path('dev_to_tl/', views.dev_to_tl, name='dev_to_tl'),
    path('tl_to_dev/',views.tl_to_dev, name='tl_to_dev'),
    path('tl_details/',views.tl_details, name='tl_details'),
    
]