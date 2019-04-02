from django.urls import path
from . import views

urlpatterns = [
  path('api/referral/', views.ReferralListCreate.as_view()),
]