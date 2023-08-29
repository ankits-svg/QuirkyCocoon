from django.db import models

# Create your models here.
class Instructor(models.Model):
    instructor_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    date_of_birth = models.DateField()
    department = models.CharField(max_length=100)
    email = models.EmailField()
    contact_number = models.CharField(max_length=20)