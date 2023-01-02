from django.shortcuts import render
from .utils import *

from django.views.decorators.http import require_http_methods
# Create your views here.
@require_http_methods(["GET", "POST"])
def my_view(request):
    if request.method == 'GET':
        return render(request, 'index.html')
    elif request.method == 'POST':
        input_data = request.POST['input_data']
        ex=True
        while ex: 
                if (len(input_data)>17):
                    kenzzygpt3_output=kenzzygpt3(input_data)
                    kenzzydialogpt_output=None
                    ex=False
                else:
                    kenzzydialogpt_output=kenzzydialogpt(input_data)
                    kenzzygpt3_output=None
                    ex=False
                
        return render(request, 'index.html', {'gpt3_output':kenzzygpt3_output,'kenzzydialogpt':kenzzydialogpt_output,'initial_input':input_data})
       


