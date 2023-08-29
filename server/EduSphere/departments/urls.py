from django.urls import path
from .views import create_department, get_department, update_department, delete_department

urlpatterns = [
    path('departments/', create_department, name='create-department'),
    path('departments/<int:department_id>/', get_department, name='get-department'),
    path('departments/<int:department_id>/update', update_department, name='update-department'),
    path('departments/<int:department_id>/delete', delete_department, name='delete-department'),
]
