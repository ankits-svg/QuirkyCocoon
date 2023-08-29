from django.urls import path
from .views import create_course, get_course, update_course, delete_course

urlpatterns = [
    path('courses/', create_course, name='create-course'),
    path('courses/<int:course_id>/', get_course, name='get-course'),
    path('courses/<int:course_id>/update/', update_course, name='update-course'),
    path('courses/<int:course_id>/delete/', delete_course, name='delete-course'),
]
