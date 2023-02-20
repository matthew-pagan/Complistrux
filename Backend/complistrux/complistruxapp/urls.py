from django.urls import path
from . import views

urlpatterns = [
    path('', views.ClientView.as_view(), name='client_list'), # for listing and creating
    path('<int:pk>', views.ClientView.as_view(), name='client_detail'), # for detail, updating, and deleting
]