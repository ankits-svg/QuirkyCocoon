from django.urls import path
from . import views

urlpatterns = [
    # path('announcements', create_announcement, name='create-announcement'),
    # path('announcements/<int:id>', create_announcement, name='details_announcement'),
    # path('announcements/<int:announcement_id>/', get_announcement, name='get-announcement'),
    # path('announcements/<int:announcement_id>/update/', update_announcement, name='update-announcement'),
    # path('announcements/<int:announcement_id>/delete/', delete_announcement, name='delete-announcement'),

    path('announcements', views.announcementApi, name='announcements-list'),
    path('announcements/<int:id>', views.announcementApi, name='announcements-detail'),
    path('announcements/create', views.announcementApi, name='announcements-create'),
    # path('announcements/update/<int:id>', views.views.create_announcement, name='announcements-update'),
    path('announcements/delete/<int:id>', views.announcementApi, name='announcements-delete'),
]
