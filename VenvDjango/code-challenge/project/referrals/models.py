# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Referral(models.Model):
  title = models.CharField(max_length=100)
  click_count = models.IntegerField()
  created_at = models.DateTimeField(auto_now_add=True)
