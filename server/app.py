from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return "<h1>Hello World!</h1>"

@app.route('/jobtify/<jobtify_text>')
def jobtify(jobtify_text):
    return jobtify_text

@app.route('/fname/<fname>/keywords/<keywords>')
def jobtify2(fname, keywords):
    print(fname)
    print(keywords.split("=="))
    return fname
    