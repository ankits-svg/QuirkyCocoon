from django.urls import path
from . import views

urlpatterns = [
    path('students', views.studentApi, name='student-list'),
    path('students/<int:id>', views.studentApi, name='student-detail'),
    path('students/create', views.studentApi, name='student-create'),
    path('students/update/<int:id>', views.studentApi, name='student-update'),
    path('students/delete/<int:id>', views.studentApi, name='student-delete'),
]
