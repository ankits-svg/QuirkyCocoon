from django.db import models
from departments.models import Department
from courses.models import Course

# Create your models here.
class Announcement(models.Model):
    announcement_id = models.AutoField(primary_key=True)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    publish_date = models.DateField()