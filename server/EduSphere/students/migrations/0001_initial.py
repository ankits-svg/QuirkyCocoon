# Generated by Django 4.2.4 on 2023-08-29 08:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('student_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('gender', models.CharField(max_length=10)),
                ('date_of_birth', models.DateField()),
                ('major', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('contact_number', models.CharField(max_length=20)),
            ],
        ),
    ]
