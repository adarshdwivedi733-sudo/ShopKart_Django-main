from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('api/categories/', include('Categories.urls')),
    path('api/products/', include('Products.urls')),
    path('admin/', admin.site.urls),
]
