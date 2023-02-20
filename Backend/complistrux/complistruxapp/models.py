from django.db import models
from django.utils import timezone

class Client(models.Model):
    company_name = models.CharField(max_length=255)
    siem_solution = models.CharField(max_length=255)
    firewall_solution = models.CharField(max_length=255)
    av_solution = models.CharField(max_length=255)
    access_control_solution = models.CharField(max_length=255)
    created_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.company_name