from django.urls import path
from . import views

urlpatterns = [path('', views.fw_index, name = 'fw_index'), 
				path('presentation/', views.fw_presentation, name = 'fw_presentation'),
				path('./form/', views.form , name = 'fw_form'),
				path('./duplex/', views.duplex, name = 'fw_duplex'),
				path('./news/', views.news, name = 'fw_news'),
				]