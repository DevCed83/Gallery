from django.shortcuts import render

# Create your views here.

def index(request):
	return render(request, 'index.html')

def presentation(request):
	return render(request, 'presentation.html')

def news(request):
	return render(request, 'news.html')

def form(request):
	return render(request, 'form.html')

def duplex(request):
	return render(request, 'duplex.html')