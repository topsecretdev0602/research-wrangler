from django.db import models
from users.models import CustomUser
from taggit.managers import TaggableManager


class Pubmark(models.Model):
    title = models.CharField(max_length=100)
    abstract = models.CharField(max_length=500, blank=True)
    authors = TaggableManager()
    url = models.URLField('URL')
    keywords = TaggableManager()
    owner = models.ForeignKey(
        CustomUser, related_name="projects", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
