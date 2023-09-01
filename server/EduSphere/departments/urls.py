from django.urls import path
from . import views

urlpatterns = [
    path('departments', views.departmentApi, name='department-list'),
    path('departments/<int:id>', views.departmentApi, name='department-detail'),
    path('departments/create', views.departmentApi, name='department-create'),
    path('departments/update/<int:id>', views.departmentApi, name='department-update'),
    path('departments/delete/<int:id>', views.departmentApi, name='department-delete'),
]
