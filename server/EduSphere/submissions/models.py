from django.db import models
from assignments.models import Assignment # Correct import path
from students.models import Student

# Create your models here.
class Submission(models.Model):
    submission_id = models.AutoField(primary_key=True)
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    submission_date = models.DateField()
    status = models.CharField(max_length=20)
    remarks = models.TextField()
