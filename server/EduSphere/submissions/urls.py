from django.urls import path
from .views import create_submission, get_submission, update_submission, delete_submission

urlpatterns = [
    path('submissions/', create_submission, name='create-submission'),
    path('submissions/<int:submission_id>/', get_submission, name='get-submission'),
    path('submissions/<int:submission_id>/update/', update_submission, name='update-submission'),
    path('submissions/<int:submission_id>/delete/', delete_submission, name='delete-submission'),
]
