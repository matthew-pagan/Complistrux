from rest_framework import serializers
from .models import Client


class ClientSerializer(serializers.ModelSerializer):
    # company_name = serializers.CharField(max_length=120)
    # siem_solution = serializers.CharField(max_length=255)
    # firewall_solution = serializers.CharField(max_length=255)
    # av_solution = serializers.CharField(max_length=255)
    # access_control_solution = serializers.CharField(max_length=255)
    # created_date = serializers.DateTimeField()
    # id = serializers.IntegerField()
    class Meta:
        model = Client
        fields = '__all__'

    # def create(self, validated_data):
    #     return Client.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.company_name = validated_data.get('company_name', instance.company_name)
        instance.siem_solution= validated_data.get('siem_solution', instance.siem_solution)
        instance.firewall_solution = validated_data.get('firewall_solution', instance.firewall_solution)
        instance.av_solution = validated_data.get('av_solution', instance.av_solution)
        instance.access_control_solution = validated_data.get('access_control_solution', instance.access_control_solution)
        instance.id = validated_data.get('id', instance.id)
        instance.image = validated_data.get('image', instance.image) if instance.image != None else None
        instance.save()
        return instance