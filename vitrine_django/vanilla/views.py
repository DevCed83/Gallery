from django.shortcuts import render

# Create your views here.

def index(request):
	return render(request, 'vanilla/index.html')

def presentation(request):
	return render(request, 'vanilla/presentation.html')

def news(request):
	return render(request, 'vanilla/news.html')

def duplex(request):
	return render(request, 'vanilla/duplex.html')