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



