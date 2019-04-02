# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from referrals.models import Referral
from referrals.serializers import ReferralSerializer
from rest_framework import generics

class ReferralListCreate(generics.ListCreateAPIView):
  queryset = Referral.objects.all()
  serializer_class = ReferralSerializer
