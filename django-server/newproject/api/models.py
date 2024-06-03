from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomUser(AbstractUser):
    pass


class Userdata(models.Model):
    name = models.CharField(max_length=255, unique=True)
    age = models.IntegerField()
    descr = models.CharField(max_length=255)
