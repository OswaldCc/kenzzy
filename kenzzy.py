import speech_recognition as sr
import transformers
from gtts import gTTS
import os
import time
import os
import datetime
import numpy as np

class ChatBot():
    def __init__(self, name):
        print("----- Starting up", name, "-----")
        self.name = name

    def speech_to_text(self):
        recognizer = sr.Recognizer()
        with sr.Microphone() as mic:
            print("Listening...")
            audio = recognizer.listen(mic)
            self.text="ERROR"
        try:
            self.text = recognizer.recognize_google(audio)
            print("Me  --> ", self.text)
        except:
            print("Me  -->  ERROR")
            

    @staticmethod
    def text_to_speech(text):
        print("Kenzzy --> ", text)
        speaker = gTTS(text=text, lang="en", slow=False)

        speaker.save("res.mp3")
        statbuf = os.stat("res.mp3")
        mbytes = statbuf.st_size / 1024
        duration = mbytes / 200
        os.system('start res.mp3')  #if you are using mac->afplay or else for windows->start
        # os.system("close res.mp3")
        time.sleep(int(50*duration))
        os.remove("res.mp3")
        
        

    def wake_up(self, text):
        return True if self.name in text.lower() else False

    @staticmethod
    def action_time():
        return datetime.datetime.now().time().strftime('%H:%M')


# Running the AI
if __name__ == "__main__":
    
    ai = ChatBot(name="Kenzzy")
    nlp = transformers.pipeline("conversational", model="microsoft/DialoGPT-medium")
    os.environ["TOKENIZERS_PARALLELISM"] = "true"
    
    ex=True
    while ex:
        ai.speech_to_text()

        ## wake up
        if ai.wake_up(ai.text) is True:
            res = "Hello I am Kenzzy, what can I do for you?"
        
        ## action time
        elif "time" in ai.text:
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
                res="Sorry, come again?"
            else:
                chat = nlp(transformers.Conversation(ai.text))
                res = str(chat)
                res = res[res.find("bot >> ")+6:].strip()

        ai.text_to_speech(res)
    print("----- Closing down Kenzzy -----")