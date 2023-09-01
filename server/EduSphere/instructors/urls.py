from django.urls import path
from . import views

urlpatterns = [
    path('instructors', views.instructorApi, name='instructor-list'),
    path('instructors/<int:id>', views.instructorApi, name='instructor-detail'),
    path('instructors/create', views.instructorApi, name='instructor-create'),
    path('instructors/update/<int:id>', views.instructorApi, name='instructor-update'),
    path('instructors/delete/<int:id>', views.instructorApi, name='instructor-delete'),
]
