from RealSliceMain import views

from django.urls import path
from django.views.generic import TemplateView

from django.urls import re_path, include

urlpatterns = [
    re_path(r'^user/transaction$', views.transactionApi),
]