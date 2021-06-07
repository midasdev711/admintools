// Only import what you need from firebase
import firebase from 'firebase/app'
import 'firebase/functions'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'
//import 'firebase/messaging'
import firebaseConfig from './config.json'

// Connect to Firebase
firebase.initializeApp(firebaseConfig)

//Globals
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
//const message = firebase.messaging()

db.settings ({
  cacheSizeBytes:firebase.firestore.CACHE_SIZE_UNLIMITED
})

export default {
  db,
  auth,
  storage,
  //message
}