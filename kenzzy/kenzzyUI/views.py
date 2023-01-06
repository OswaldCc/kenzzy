from django.shortcuts import render
from .utils import *

from django.views.decorators.http import require_http_methods
# Create your views here.
@require_http_methods(["GET", "POST"])
def my_view(request):
    chat=None
    if request.method == 'GET':
        return render(request, 'index.html')
    elif request.method == 'POST':
        input_data = request.POST['input']
        chat_data=request.POST['chat_history']

        if len(input_data)>1: 
                if (len(input_data)>17):
                    output=kenzzygpt3(input_data,chat_data)
                    chat=append_interaction_to_chat_log(input_data,output)
                else:
                    output=kenzzydialogpt(input_data,chat_data)
                    chat=append_interaction_to_chat_log(input_data,output)
                       
        return render(request, 'index.html', {'gpt3_output':output, 'input':input_data,'chat_history':chat})
       


