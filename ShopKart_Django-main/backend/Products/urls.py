from django.urls import path
from . import views

urlpatterns = [
    path("list",views.ProductList),
    path("list/<int:categoryId>",views.ProductListOfCategory)

]