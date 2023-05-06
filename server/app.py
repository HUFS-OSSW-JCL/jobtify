from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return "<h1>Hello World!</h1>"

@app.route('/jobtify/<jobtify_text>')
def jobtify(jobtify_text):
    return jobtify_text