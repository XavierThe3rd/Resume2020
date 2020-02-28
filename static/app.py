
from flask import Flask, render_template
from flask_cors import  CORS, cross_origin

app = Flask(__name__, static_folder="../Resume", template_folder="../public")
CORS(app)
cross_origin()

@app.route("/Resume/Home")
def index():
    return render_template("index.html")
