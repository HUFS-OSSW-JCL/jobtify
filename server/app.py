from flask import Flask
import requests
from firebase_admin import auth

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

@app.route('/user_id', methods=['POST'])
def user_post():
    params = json.loads(request.get_data(), encoding='utf-8')
    if len(params) == 0:
        return 'No parameter'

    params_str = ''
    for key in params.keys():
        params_str += 'key: {}, value: {}<br>'.format(key, params[key])
    return params_str

@app.route('/test')
def test():
    uid
    user = auth.get_user(uid)
# user_id / keywords / location / crawl
