from django.urls import path
from rest_framework import routers
from .api import PubmarkViewSet
from . import views

ROUTER = routers.DefaultRouter()
ROUTER.register('api/pubmarks', PubmarkViewSet, 'pubmarks')

urlpatterns = [
    path('search/', views.pub_search),
]

urlpatterns += ROUTER.urls
