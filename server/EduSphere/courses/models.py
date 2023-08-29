from django.db import models

# Create your models here.
class Course(models.Model):
    course_id = models.AutoField(primary_key=True)
    course_code = models.CharField(max_length=20)
    course_name = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    credits = models.PositiveIntegerField()
    description = models.TextField()