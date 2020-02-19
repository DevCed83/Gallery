# Python imports
from datetime import date

#django imports
from django.db import models

# Create your models here.
class Collaborator(models.Model):
	first_name = models.CharField(max_length = 70)
	last_name = models.CharField(max_length = 70)
	

class Detail(models.Model):
	"""docstring for Details"""
	def __init__(self):
		super(Details, self).__init__()
		self.first_name = ""
		self.last_name = ""
		self.email = ""
		self.phone_number = ""
		self.social_network = {}

class Experience(models.Model):
	"""docstring for Experience"""
	def __init__(self):
		super(Experience, self).__init__()
		self.start_date = {} # date models.Model
		self.end_date = {} # date models.Model
		self.company = ""
		self.role = ""
		self.tasks = []

class Education(models.Model):
	"""docstring for Education"""
	def __init__(self):
		super(Education, self).__init__()
		self.start_date = {} # date models.Model
		self.end_date = {} # date models.Model
		self.institution = ""
		self.cursus = ""
		self.description = ""

class Skill(models.Model):
	"""docstring for Skill"""
	def __init__(self):
		super(Skill, self).__init__()
		self.name = ""
		self.level = 0 # out of 5

class SocialNetwork(object):
	"""docstring for SocialNetwork"""
	def __init__(self):
		super(SocialNetwork, self).__init__()
		self.name = ""
		self.url = ""
		