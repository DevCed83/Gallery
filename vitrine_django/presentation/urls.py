from django.urls import path
from . import views

url_patterns = [path('', views.index, name = 'index'),
				path('presentation/', views.presentation, name = 'presentation'),
				path('form/', views.form, name = 'form'),
				]