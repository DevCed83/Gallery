from django.shortcuts import render

# Create your views here.

def index(request):
	return render(request, 'framework/index.html')

def presentation(request):
	return render(request, 'framework/my_presentation.html')

def news(request):
	return render(request, 'framework/news.html')

def form(request):
	return render(request, 'framework/form.html')

def duplex(request):
	return render(request, 'framework/duplex.html')