import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from firebase_admin import auth
# Use a service account.
cred = credentials.Certificate('./env/jobtify-jcl-firebase-adminsdk-486oy-8b1b68b8bd.json')

app = firebase_admin.initialize_app(cred)

db = firestore.client()

# doc_ref = db.collection(u'users').document(u'alovelace')
# doc_ref.set({
#     u'first': u'Ada',
#     u'last': u'Lovelace',
#     u'born': 1815
# })


uid = 'etFgreEMKxYI726JSZ164rRcY3x1'
user = auth.get_user(uid)
print(user.email)