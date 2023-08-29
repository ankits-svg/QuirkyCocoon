# students/models.py
from django.db import models

class Student(models.Model):
    student_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    date_of_birth = models.DateField()
    major = models.CharField(max_length=100)
    email = models.EmailField()
    contact_number = models.CharField(max_length=20)
