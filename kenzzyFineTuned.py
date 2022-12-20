
import transformers
import os
import time
import os
import datetime
import numpy as np

class ChatBot():
    def __init__(self, name):
        print("----- Starting up", name, "-----")
        self.name = name

    @staticmethod
    def action_time():
        return datetime.datetime.now().time().strftime('%H:%M')
    
    def wake_up(self, text):
        return True if self.name in text.lower() else False
    def speech_to_text(self):
       
        with input() as words:
           
            self.text="ERROR"
        try:
            self.text = words
            print("Me  --> ", self.text)
        except:
            print("Me  -->  ERROR")
            


# Running the AI
if __name__ == "__main__":
    
    ai = ChatBot(name="Kenzzy")
    nlp = transformers.pipeline("conversational", model="microsoft/DialoGPT-medium")
    os.environ["TOKENIZERS_PARALLELISM"] = "true"
    
    ex=True
    while ex:
        ai.speech_to_text()
       
        ## action time
        if "time" in ai.text:
            res = ai.action_time()
        
        ## respond politely
        elif any(i in ai.text for i in ["thank","thanks"]):
            res = np.random.choice(["you're welcome!","anytime!","no problem!","cool!","I'm here if you need me!","mention not"])
        
        elif any(i in ai.text for i in ["exit","close"]):
            res = np.random.choice(["Tata","Have a good day","Bye","Goodbye","Hope to meet soon","peace out!"])

        elif any(i in ai.text for i in ["who made you","who is you creator","who made Kenzzy"]):
            res = np.random.choice(["I was created by Samuel Kabati","I sometimes like to call him Blueberry but his real name is Samuel Kabati, my babe, my creator!","I sometimes like to call him Blueberry but his real name is Samuel Kabati, my babe, my creator. Make sure to check him out on Linkedin"])
               
            ex=False
        ## conversation
        else:   
            if ai.text=="ERROR":
                res="Sorry, I do not understand your statement "
            else:
                chat = nlp(transformers.Conversation(ai.text))
                res = str(chat)
                res = res[res.find("bot >> ")+6:].strip()

     
    print("----- Closing down Kenzzy -----")