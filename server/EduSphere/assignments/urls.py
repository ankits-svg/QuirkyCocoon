from django.urls import path
from .views import create_assignment, get_assignment, update_assignment, delete_assignment

urlpatterns = [
    path('assignments/', create_assignment, name='create-assignment'),
    path('assignments/<int:assignment_id>/', get_assignment, name='get-assignment'),
    path('assignments/<int:assignment_id>/update/', update_assignment, name='update-assignment'),
    path('assignments/<int:assignment_id>/delete/', delete_assignment, name='delete-assignment'),
]
