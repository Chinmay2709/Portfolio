from django.shortcuts import render, HttpResponse

# Create your views here.


def home(request):

    return render(request , template_name = "index.htm") # type: ignore