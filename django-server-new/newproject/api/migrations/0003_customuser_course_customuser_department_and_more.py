# Generated by Django 5.0 on 2024-06-06 05:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_customuser_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='course',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='customuser',
            name='department',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='customuser',
            name='file',
            field=models.FileField(blank=True, null=True, upload_to='uploads/'),
        ),
    ]
