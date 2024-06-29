from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('perros/', views.perros, name='perros'), 
    path('gatos/', views.gatos, name='gatos'),
    path('comidaperros/', views.comidaperros, name='comidaperros'), 
    path('comidagatos/', views.comidagatos, name='comidagatos'),
    path('registro/', views.registro, name='registro'),
    # Agrega otras rutas aquí
]