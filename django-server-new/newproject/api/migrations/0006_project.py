# Generated by Django 5.0 on 2024-06-19 08:48

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_developers_status'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('client_name', models.CharField(max_length=255)),
                ('client_address', models.TextField(max_length=255)),
                ('project_name', models.CharField(max_length=255)),
                ('description', models.TextField(max_length=255)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('attachment', models.FileField(blank=True, null=True, upload_to='uploads/')),
                ('developer_details', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='developer_projects', to='api.developers')),
                ('teamlead_details', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='teamlead_projects', to='api.developers')),
            ],
        ),
    ]
