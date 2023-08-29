from django.urls import path
from .views import enroll_student_in_course, get_student_enrollments

urlpatterns = [
    path('enrollments/', enroll_student_in_course, name='enroll-student-in-course'),
    path('students/<int:student_id>/enrollments/', get_student_enrollments, name='get-student-enrollments'),
]
