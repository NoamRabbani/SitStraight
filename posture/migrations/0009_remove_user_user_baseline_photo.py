# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-08-30 15:05
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posture', '0008_auto_20170106_2048'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='user_baseline_photo',
        ),
    ]
