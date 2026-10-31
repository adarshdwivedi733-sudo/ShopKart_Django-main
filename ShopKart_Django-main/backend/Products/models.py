from django.db import models
from Categories.models import Category

# Create your models here.
class Product(models.Model):
    poster = models.CharField(max_length=555)
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
