from rest_framework.serializers import ModelSerializer
from .models import Product
from Categories.serializer import CategorySerializer


class ProductSerializer(ModelSerializer):
    
    class Meta:
        model = Product
        fields = '__all__'

        
    category = CategorySerializer()