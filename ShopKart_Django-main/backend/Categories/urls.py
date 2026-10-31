from django.urls import path
from . import views

urlpatterns = [
    path("list",views.CategoryList),
    path("create",views.CategoryCreate),
    path("update/<int:categoryId>",views.CategoryUpdate),
]