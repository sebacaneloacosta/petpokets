from django.shortcuts import render

def index(request):
    return render(request, 'app_petpokets/index.html')

def perros(request):
    return render(request, 'app_petpokets/perros.html')

def gatos(request):
    return render(request, 'app_petpokets/gatos.html')

def comidaperros(request):
    return render(request, 'app_petpokets/comidaperros.html')

def comidagatos(request):
    return render(request, 'app_petpokets/comidagatos.html')

def registro(request):
    return render(request, 'registro/comidagatos.html')