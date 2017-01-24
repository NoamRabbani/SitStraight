from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.frontPage, name='frontPage'),
    url(r'^captureBaseline$', views.captureBaseline, name='captureBaseline'),
    url(r'^tracker$', views.tracker, name='tracker'),
    url(r'^assertPosture$', views.assertPosture, name='assertPosture'),

    url(r'^webcamWorker.js$', views.webcamWorker, name='webcamWorker$'),
]
