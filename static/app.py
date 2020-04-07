from flask import Flask, render_template, request
from flask_cors import  CORS, cross_origin
from flask_mail import Mail, Message

app = Flask(__name__, static_folder="../Resume", template_folder="../public")
CORS(app)
cross_origin()


mail = Mail()
app.secret_key = 'development key'
app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 465
app.config["MAIL_USE_SSL"] = True
app.config["MAIL_USERNAME"] = 'tomxgrasso@gmail.com'
app.config["MAIL_PASSWORD"] = 'XGt^3p9|X@'
mail.init_app(app)


@app.route("/Resume/Home")
def home():
    return render_template("index.html")

@app.route("/Resume/Portfolio")
def portfolio():
    return render_template("index.html")

@app.route("/Resume/About")
def About():
    return render_template("index.html")


@app.route('/Resume/Contact', methods=['POST'])
def mailit():
    data = request.get_json(force=True)
    msg = Message(data[2], sender='tomxgrasso@gmail.com', recipients=['tomxgrasso@gmail.com'])
    msg.body = """From: %s; \n\nEmail: %s; \n\n%s""" % (data[0], data[1], data[3])
    mail.send(msg)

 
if __name__ == "__main__":
        app.run(host='127.0.0.1', debug=True)
