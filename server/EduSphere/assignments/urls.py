from django.urls import path
from . import views

urlpatterns = [
    path('assignments', views.assignmentApi, name='assignment-list'),
    path('assignments/<int:id>', views.assignmentApi, name='assignment-detail'),
    path('assignments/create', views.assignmentApi, name='assignment-create'),
    path('assignments/update/<int:id>', views.assignmentApi, name='assignment-update'),
    path('assignments/delete/<int:id>', views.assignmentApi, name='assignment-delete'),
]
