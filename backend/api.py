from rest_framework import viewsets, permissions
from .serializers import PubmarkSerializer


class PubmarkViewSet(viewsets.ModelViewSet):
    permission_classes = {
        permissions.IsAuthenticated
    }
    serializer_class = PubmarkSerializer

    def get_queryset(self):
        return self.request.user.pubmarks.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
