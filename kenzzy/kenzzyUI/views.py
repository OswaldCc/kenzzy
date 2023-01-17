from django.shortcuts import render
from .utils import *

from django.views.decorators.http import require_http_methods
# Create your views here.
@require_http_methods(["GET", "POST"])
def my_view(request):
    error="An error ocurred"+" "+chr(0x1F61E)
    chat=None
    if request.method == 'GET':
        return render(request, 'index.html')
    elif request.method == 'POST':
        try:
            input_data = request.POST['input']
            chat_data=request.POST['chat_history']
            quote=request.POST['famous_quote']

            if len(input_data)>1: 
                    if (len(input_data)>20):
                        output=kenzzygpt3(quote,input_data,chat_data)
                        chat=append_interaction_to_chat_log(input_data,output)
                    else:
                        output=kenzzydialogpt(quote,input_data,chat_data)
                        chat=append_interaction_to_chat_log(input_data,output)
            else:
                return render(request, 'index.html', {'error': """I didn't get that"""+chr(0x1F61E)})
        except Exception as e:
            try:
                output=kenzzygpt3(quote,input_data,chat_data)
                chat=append_interaction_to_chat_log(input_data,output)
            except Exception as e:
                return render(request, 'index.html', {'error':error})
        return render(request, 'index.html', {'gpt3_output':output, 'input':input_data,'chat_history':chat})


