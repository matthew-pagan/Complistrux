from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .serializers import ClientSerializer
from .models import Client


class ClientView(APIView):

    def get(self, request, pk=None):
        if pk:  
            data = Client.objects.get(pk=pk)
            serializer = ClientSerializer(data)
        else:
            data = Client.objects.all()
            serializer = ClientSerializer(data, many=True)
        return Response({"result": serializer.data})

    def post(self, request):
        client = request.data
        serializer = ClientSerializer(data=client)
        if serializer.is_valid(raise_exception=True):
            client_saved = serializer.save()
        return Response({"result": f"Client {client_saved.company_name}"})

    def put(self, request, pk):
        saved_client = get_object_or_404(Client.objects.all(), pk=pk)
        data = request.data
        serializer = ClientSerializer(instance=saved_client, data=data, partial=True) #partial means not all fields are required 
        #The .is_valid() method takes an optional raise_exception flag that will cause it to raise a serializers.ValidationError exception if there are validation errors.
        if serializer.is_valid(raise_exception=True):#
            saved_client = serializer.save()
        return Response({"result": f"{saved_client.company_name} updated"})

    def delete(self, request, pk):
        client = get_object_or_404(Client.objects.all(), pk=pk)
        client.delete()
        return Response({"result": f"Client id {pk} deleted"},status=204)