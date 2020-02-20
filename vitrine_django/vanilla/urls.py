from django.urls import path
from . import views

urlpatterns = [path('', views.index, name='index'),
				path('presentation/', views.presentation, name = 'presentation'),
				path('news/', views.news, name = 'news'),
				path('duplex/', views.duplex, name = 'duplex'),]