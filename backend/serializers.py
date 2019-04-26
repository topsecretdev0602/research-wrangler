from rest_framework import serializers
from backend.models import Pubmark


class PubmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pubmark
        fields = '__all__'
