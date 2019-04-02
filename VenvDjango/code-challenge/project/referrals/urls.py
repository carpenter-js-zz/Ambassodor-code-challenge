from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
  path('api/referral/', views.ReferralListCreate.as_view()),
  path('api/referral/<int:pk>/', views.ReferrelDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)