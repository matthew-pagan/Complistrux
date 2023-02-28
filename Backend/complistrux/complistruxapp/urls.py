from django.urls import path
from . import views

urlpatterns = [
    path('', views.ClientView.as_view(), name='client_list'), # for listing and creating
    path('get_documents/<int:pk>', views.generatedocs, name='generate_docs'),
    path('<int:pk>', views.ClientView.as_view(), name='client_detail'), # for detail, updating, and deleting
]