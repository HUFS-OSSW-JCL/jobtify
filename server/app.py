from flask import Flask, request, make_response, jsonify
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from flask_cors import CORS

#Firebase, Firestore 설정
cred = credentials.Certificate('./env/jobtify-jcl-firebase-adminsdk-486oy-8b1b68b8bd.json')
app = firebase_admin.initialize_app(cred)
db = firestore.client()

#Flask 설정
app = Flask(__name__)
CORS(app)

#최초 가입시 Firestore에 유저 등록
@app.route('/register_user', methods=['POST'])
def register_user():
    #reuqest로 부터 data 추출 후, 데이터 형식에 맞추어 json reponse 생성
    data = request.json
    uid = data.get('uid')
    keywords = data.get('keywords')
    country = data.get('country')
    sites = data.get('sites')
    response = make_response(jsonify({'status':'good'}))
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, X-Requested-With"
    print(data)

    #firestore에 데이터 저장
    doc_ref = db.collection(u'users').document(uid)
    doc_ref.set({
        u'keywords': keywords,
        u'country': country,
        u'sites': sites
    })
    print(response)

    return response

#요청 시, 유저의 jd 정보들을 response
@app.route('/get_jds', methods=['POST'])
def get_jds():
    jds=[]
    data = request.json
    print(data)
    uid = data.get('uid')
    doc_ref = db.collection(u'users').document(uid).collection(u'jds')
    docs = doc_ref.stream()
    for doc in docs:
        jds.append(doc.to_dict())
    response = make_response(jsonify(jds))
    print(response)
    return response

#요청 시, 단일 jd 정보를 response
@app.route('/get_jd', methods=['POST'])
def get_jd():
    #request로부터 uid, link 데이터 추출
    data = request.json
    print(data)
    uid = data.get('uid')
    jd_link = data.get('link')

    #uid를 기반으로 해당 uid의 jd들을 가져온 뒤, jd link와 일치하는 필드 document 가져오기
    doc_ref = db.collection(u'users').document(uid).collection(u'jds')
    jds = doc_ref.where(u'link', u'==', jd_link).stream()
    info_ref = db.collection(u'users').document(uid)
    info = info_ref.get()
    
    site_arr = []

    #가져온 jd 정보를 바탕으로 reponse json 생성
    for jd in jds:
        if jd.to_dict()['link'] == data.get('link'):
            site_arr.append(jd.to_dict()['site'])
            response = make_response(
                jsonify(
                    {
                        'bookmark':jd.to_dict()['bookmark'],
                        'company':jd.to_dict()['company'],
                        'link':jd.to_dict()['link'],
                        'title':jd.to_dict()['title'],
                        'site':site_arr,
                        'keywords':info.to_dict()['keywords'],
                        'country':info.to_dict()['country']
                    }
                )
            )
    print(response)
    return response

#요청 시, 즐겨찾기 정보(bool형)에 맞게 jd 데이터 업데이트
@app.route('/set_bookmark', methods=['POST'])
def set_bookmark():
    #request 중 uid 값 추출
    data = request.json
    print(data)
    uid = data.get('uid')
    jd_link = data.get('link')

    #추출한 uid를 기준으로 일치하는 jd 정보 가져와서 request의 bookmark 데이터에 맞게 업데이트
    doc_ref = db.collection(u'users').document(uid).collection(u'jds')
    docs = doc_ref.where(u'link', u'==', jd_link).stream()
    for doc in docs:
        doc_ref.document(doc.id).set({
            u'bookmark':data.get('bookmark'),
            u'company':doc.to_dict()['company'],
            u'link':doc.to_dict()['link'],
            u'title':doc.to_dict()['title'],
            u'site':doc.to_dict()['site']
        })
    
    response = make_response(jsonify({'status': 'good'}))
    print(response)
    return response

#요청 시 크롤링에 필요한 정보 response
@app.route('/get_crawl_info', methods=['POST'])
def get_crawl_info():
    #reuqest 데이터 추출
    data = request.json
    print(data)
    json_arr = []

    #user들의 uid, country, keywords, sites를 배열 형태로 reponse json 생성
    uids_stream = db.collection(u'users').stream()
    for uid in uids_stream:
        json_uid = {
            'uid': uid.id,
            'country': uid.to_dict()['country'],
            'keywords': uid.to_dict()['keywords'],
            'sites': uid.to_dict()['sites']
        }
        json_arr.append(json_uid)
    response = make_response(jsonify(json_arr))
    print(response)
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)