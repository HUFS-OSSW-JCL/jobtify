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
    response =  make_response(jsonify({'title':'JCL 프론트엔드 개발자', 'keywords':'프론트엔드==UI/UX==', 'location': '서울', 'crawl':'wanted==jumpit==rallit==', 'bookmark':True, 'link':'https://www.naver.com', 'company':'HUFS'}), 200)
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, X-Requested-With"
    return response

@app.route('/register_user', methods=['POST'])
def register_user():
    data = request.json
    uid = data.get('uid')
    keywords = data.get('keywords')
    country = data.get('country')
    sites = data.get('sites')
    response = make_response(jsonify({'status':'good'}))
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, X-Requested-With"
    print(uid, keywords, country, sites)
    print(data)
    doc_ref = db.collection(u'users').document(uid)
    doc_ref.set({
        u'keywords': keywords,
        u'country': country,
        u'sites': sites
    })
    return response

@app.route('/get_bookmarks', methods=['POST'])
def get_bookmarks():
    bookmarks=[]
    data = request.json
    uid = data.get('uid')
    doc_ref = db.collection(u'users').document(uid).collection(u'jds')
    docs = doc_ref.stream()
    for doc in docs:
        if doc.to_dict()['bookmark'] == True:
            print("It's true!")
            bookmarks.append(doc.to_dict())
    response = make_response(jsonify(bookmarks))
    return response
 
@app.route('/set_bookmark', methods=['POST'])
def set_bookmark():
    data = request.json
    uid = data.get('uid')
    doc_ref = db.collection(u'users').document(uid).collection(u'jds')
    docs = doc_ref.where(u'link', u'==', data.get('link')).stream()
    for doc in docs:
        print(f'{doc.id} => {doc.to_dict()}')
        doc_ref.document(doc.id).set({
            u'bookmark':data.get('bookmark'),
            u'company':doc.to_dict()['company'],
            u'link':doc.to_dict()['link'],
            u'title':doc.to_dict()['title']
        })
    response = make_response(jsonify({'status': 'good'}))
    return response

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)