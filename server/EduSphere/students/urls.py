from django.urls import path
from .views import get_all_student_profile, create_student_profile, get_student_profile, update_student_profile, delete_student_profile

urlpatterns = [
    path('students', get_all_student_profile, name='get-all-student-profile'),
    path('students/create', create_student_profile, name='create-student-profile'),
    path('students/<int:student_id>', get_student_profile, name='get-student-profile'),
    path('students/<int:student_id>/update', update_student_profile, name='update-student-profile'),
    path('students/<int:student_id>/delete', delete_student_profile, name='delete-student-profile'),
]
