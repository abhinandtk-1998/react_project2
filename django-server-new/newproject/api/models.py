from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomUser(AbstractUser):
    user_type = models.CharField(default=1, max_length=10)
    


class developers(models.Model):
    user=models.ForeignKey(CustomUser,on_delete=models.CASCADE,null=True)
    address = models.TextField(max_length=255,null=True)
    course = models.CharField(max_length=255,null=True)
    certificate = models.FileField(upload_to='uploads/',null=True,blank=True)
    department = models.CharField(max_length=255,null=True)
    status = models.CharField(max_length=255, default=0)

class Project(models.Model):
    client_name = models.CharField(max_length=255)
    client_address = models.TextField(max_length=255)
    project_name = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField()
    attachment = models.FileField(upload_to='uploads/',null=True,blank=True)
    teamlead_details = models.ForeignKey(developers,on_delete=models.CASCADE,null=True,related_name='teamlead_projects')
    developer_details = models.ForeignKey(developers,on_delete=models.CASCADE,null=True,related_name='developer_projects')





