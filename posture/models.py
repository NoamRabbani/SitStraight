from django.db import models
import uuid

class User(models.Model):
    user_id = models.CharField(max_length=200, null=True)
    user_baseline_eyes_height = models.IntegerField(null=True)
    user_latest_eyes_height = models.IntegerField(null=True)
