from django.urls import path
from .views import create_announcement, get_announcement, update_announcement, delete_announcement

urlpatterns = [
    path('announcements/', create_announcement, name='create-announcement'),
    path('announcements/<int:announcement_id>/', get_announcement, name='get-announcement'),
    path('announcements/<int:announcement_id>/update/', update_announcement, name='update-announcement'),
    path('announcements/<int:announcement_id>/delete/', delete_announcement, name='delete-announcement'),
]
