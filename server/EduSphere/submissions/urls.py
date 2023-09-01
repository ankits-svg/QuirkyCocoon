from django.urls import path
from . import views
urlpatterns = [
    path('submissions', views.submissionApi, name='submission-list'),
    path('submissions/<int:id>', views.submissionApi, name='submission-detail'),
    path('submissions/create', views.submissionApi, name='submission-create'),
    path('submissions/update/<int:id>', views.submissionApi, name='submission-update'),
    path('submissions/delete/<int:id>', views.submissionApi, name='submission-delete'),
]
