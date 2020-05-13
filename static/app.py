from flask import Flask
from flask_cors import  CORS, cross_origin
import os

app = Flask(__name__, static_folder="./resume", template_folder="./public")
CORS(app)
cross_origin()
