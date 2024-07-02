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
    path('add_project/', views.add_project, name='add_project'),
    path('project_details/', views.project_details, name='project_details'),
    path('assign_work/', views.assign_work, name='assign_work'),
    path('tl_prj_details/', views.tl_prj_details, name = 'tl_prj_details'),
    path('project_details_tl/', views.project_details_tl, name = 'project_details_tl'),
    path('assign_work_tl/', views.assign_work_tl, name='assign_work_tl'),
    path('dev_details_tl/', views.dev_details_tl, name='dev_details_tl'),
    path('project_details_dev/', views.project_details_dev, name = 'project_details_dev'),
    path('developer_profile/', views.developer_profile, name='developer_profile')
    
    
]