from rest_framework import routers
from .api import PubmarkViewSet

ROUTER = routers.DefaultRouter()
ROUTER.register('api/pubmarks', PubmarkViewSet, 'pubmarks')

urlpatterns = ROUTER.urls
