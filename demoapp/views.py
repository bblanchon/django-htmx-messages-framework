from django.shortcuts import render
from django.contrib import messages
from django.http.response import HttpResponse

def home(request):
    return render(request, "home.html")

def message(request):
    messages.success(request, "It works!")
    return HttpResponse(status=204)