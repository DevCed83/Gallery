from django.shortcuts import render

# Create your views here.

def fw_index(request):
	context = {'mon_test':  'Salut gros !'}
	return render(request, 'my_index.html', context)

def fw_presentation(request):
	context = {'mon_test' : 'Salut gros !'}
	return render(request, 'my_presentation.html', context)

def news(request):
	return render(request, 'news.html')

def form(request):
	return render(request, 'form.html')

def duplex(request):
	return render(request, 'duplex.html')