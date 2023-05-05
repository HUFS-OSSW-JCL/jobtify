import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account.
cred = credentials.Certificate('./env/jobtify-jcl-firebase-adminsdk-486oy-725ae38e50.json')

app = firebase_admin.initialize_app(cred)

db = firestore.client()