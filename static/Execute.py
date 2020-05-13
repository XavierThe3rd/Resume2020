from flask import Flask, render_template
from functions import sendMail
from app import app


@app.route("/", methods=['POST'])
def login():
    return False

@app.route("/resume/home")
def home():
    return render_template("index.html")

@app.route("/resume/portfolio")
def portfolio():
    return render_template("index.html")

@app.route("/resume/about")
def about():
    return render_template("index.html")


@app.route('/resume/contact', methods=['POST'])
def mailit():
    return sendMail()


if __name__ == "__main__":
        app.run(debug=True)