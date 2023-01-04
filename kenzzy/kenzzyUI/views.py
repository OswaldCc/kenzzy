from django.shortcuts import render
from .utils import *

from django.views.decorators.http import require_http_methods
# Create your views here.
@require_http_methods(["GET", "POST"])
def my_view(request):
    if request.method == 'GET':
        return render(request, 'index.html')
    elif request.method == 'POST':
        input_data = request.POST['input']
        ex=True
        while ex: 
                if (len(input_data)>17):
                    output=kenzzygpt3(input_data)
                    ex=False
                else:
                    output=kenzzydialogpt(input_data)
                    ex=False
                
        return render(request, 'index.html', {'gpt3_output':  output, 'input':input_data})
       


