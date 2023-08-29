from django.urls import path
from .views import create_instructor_profile, get_instructor_profile, update_instructor_profile, delete_instructor_profile

urlpatterns = [
    path('instructors/', create_instructor_profile, name='create-instructor-profile'),
    path('instructors/<int:instructor_id>/', get_instructor_profile, name='get-instructor-profile'),
    path('instructors/<int:instructor_id>/update/', update_instructor_profile, name='update-instructor-profile'),
    path('instructors/<int:instructor_id>/delete/', delete_instructor_profile, name='delete-instructor-profile'),
]
