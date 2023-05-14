from flask import Flask, request, make_response, jsonify
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from firebase_admin import auth
from flask_cors import CORS

# Use a service account.
cred = credentials.Certificate('./env/jobtify-jcl-firebase-adminsdk-486oy-8b1b68b8bd.json')

app = firebase_admin.initialize_app(cred)

db = firestore.client()

app = Flask(__name__)
CORS(app)
@app.route('/')
def hello_world():
    print("test2")
    return "<h1>Hello World!</h1>"

@app.route('/jobtify/<jobtify_text>')
def jobtify(jobtify_text):
    return jobtify_text

@app.route('/fname/<fname>/keywords/<keywords>')
def jobtify2(fname, keywords):
    print(fname)
    print(keywords.split("=="))
    return fname

# user_id / keywords / location / crawl
@app.route('/json_test', methods=['POST'])
def handle_json():
    data = request.json
    uid = data.get('uid')
    user = auth.get_user(uid)
    return make_response(jsonify({'status': True, 'email': user.email}), 200)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)