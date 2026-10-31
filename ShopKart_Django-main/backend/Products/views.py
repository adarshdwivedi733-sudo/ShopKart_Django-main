from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializer import ProductSerializer
from .models import Product

@api_view(['GET'])
def ProductList(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def ProductListOfCategory(request,categoryId):
    products = Product.objects.filter(category=categoryId)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)