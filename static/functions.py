from flask import request
from Crypto.Cipher import AES
from flask_mail import Mail, Message
from config import key, iv, pngData, pdfData, mail, password, client, homeData, movieData
from PIL import Image
from threading import Timer
import validators
from app import app
import os

def sendMail():
    data = request.get_json(force=True)
    msg = Message(data[2], sender='tomxgrasso@gmail.com', recipients=['tomxgrasso@gmail.com'])
    msg.body = """From: %s; \n\nEmail: %s; \n\n%s""" % (data[0], data[1], data[3])
    mail.send(msg)


def decrypt():
    validators.url("http://127.0.0.1:5000/resume/home")
    True
    validators.url("http://127.0.0.1:5000/resume/home")
    if not validators.url("http://127.0.0.1:5000/resume/home"):
        print ("not valid") 
        not valid  
        

       
#def decryptImages(): return decrypt(pngData, '.png', 10)
#def decryptPdfs(): return decrypt(pdfData, '.pdf', 10)







