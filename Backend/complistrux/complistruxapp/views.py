from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .serializers import ClientSerializer
from .models import Client
from .resources.utils import generateDocuments
import mimetypes
from django.http import HttpResponse, FileResponse
from pathlib import Path
import os
from django.views.static import serve
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status


class ClientView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, pk=None):
        if pk:  
            data = Client.objects.get(pk=pk)
            serializer = ClientSerializer(data)
        else:
            data = Client.objects.all()
            serializer = ClientSerializer(data, many=True)
        return Response({"result": serializer.data})

    def post(self, request, *args, **kwargs):
        # print("hit post request")
        # client = request.data
        # serializer = ClientSerializer(data=client)
        # if serializer.is_valid(raise_exception=True):
        #     client_saved = serializer.save()
        # return Response({"result": f"Client {client_saved.company_name}"})
        client_serializer = ClientSerializer(data=request.data)
        if client_serializer.is_valid():
            client_serializer.save()
            return Response(client_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', client_serializer.errors)
            return Response(client_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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

BASE_DIR = Path(__file__).resolve().parent.parent   

def generatedocs(request, pk=None):
    if pk:  
        data = Client.objects.get(pk=pk)
        serializer = ClientSerializer(data)
        company = serializer.data
        generateDocuments(data)
        print("Docs are printed!")
        # Define Django project base directory
        BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        # Define text file name
        # filename = 'result1.docx'
        filename = "/clientdocs.zip"
        # Define the full file path
        # filepath = BASE_DIR + '/complistruxapp/resources/' + filename
        filepath = BASE_DIR + filename
        # Open the file for reading content
        path = open(filepath, 'rb')
        # Set the mime type
        mime_type, _ = mimetypes.guess_type(filepath)
        # Set the return value of the HttpResponse
        response = HttpResponse(path, content_type=mime_type)
        # Set the HTTP header for sending to browser
        response['Content-Disposition'] = "attachment; filename=%s" % filename
        # Return the response value
        return response