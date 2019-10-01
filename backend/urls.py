from django.urls import path
from rest_framework import routers
from .api import PubmarkViewSet
from .views import pub_search

ROUTER = routers.DefaultRouter()
ROUTER.register('api/pubmarks', PubmarkViewSet, 'pubmarks')


urlpatterns = [
    path('api/search/', pub_search),
]

urlpatterns += ROUTER.urls
