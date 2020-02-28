import boto3
import aws_controller
from config import mysql
from app import app
from flask import request, jsonify
import base64
import io
from PIL import Image 

def init_Connect():
    conn= mysql.connect()
    cur = conn.cursor()
    sql_Query = "select IMAGE from bVyxXDjnEF.xx_BLOB"
    cur.execute(sql_Query)
    img = cur.fetchall()
    file_like2 = io.BytesIO(img[0][0])  
    img1=Image.open(file_like2)
    img1.show() 


#@app.route('/get-items')
#def get_items():
#    return jsonify(aws_controller.get_items())

@app.route("/get-items")
def Conn():
   return init_Connect()

if __name__ == "__main__":
    app.run(host='127.0.0.1', debug=True)