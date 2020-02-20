from django.db import models

# Create your models here.

class Strategy(models.Model):
	"""docstring for Team_Member"""
	take_profit = models.DecimalField(decimal_places = 3, max_digits = 5)
	fees = models.DecimalField(decimal_places = 5, max_digits = 8)

class Trade(models.Model):
	price = models.DecimalField(decimal_places = 3, max_digits = 12)
	volume = models.DecimalField(decimal_places = 8, max_digits = 12)
	timestamp = models.IntegerField()

class Position(models.Model):
	opening_trade = models.CharField(max_length = 70)
	closing_trade = models.CharField(max_length = 70)

class Ticker(models.Model):
	bidding_price = models.DecimalField(decimal_places = 3, max_digits = 12)
	asking_price = models.DecimalField(decimal_places = 3, max_digits = 12)

	def __str__(self):
		return self.asking_price
