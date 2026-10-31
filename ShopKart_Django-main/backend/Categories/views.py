from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializer import CategorySerializer
from .models import Category


@api_view(['GET'])
def CategoryList(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def CategoryCreate(request):
    serializer = CategorySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)


@api_view(['PUT'])
def CategoryUpdate(request,categoryId):
    category = Category.objects.get(id=categoryId)
    serializer = CategorySerializer(instance=category,data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)