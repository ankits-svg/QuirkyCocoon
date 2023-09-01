
from django.urls import path
from . import views

urlpatterns = [
    path('courses', views.courseApi, name='course-list'),
    path('courses/<int:id>', views.courseApi, name='course-detail'),
    path('courses/create', views.courseApi, name='course-create'),
    path('courses/update/<int:id>', views.courseApi, name='course-update'),
    path('courses/delete/<int:id>', views.courseApi, name='course-delete'),
]
