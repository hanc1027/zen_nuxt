import firebase from 'firebase'
import 'firebase/firestore' //if use firestore

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAOzccuLBhNT5d3YJZ0NckZ7iAUswIY07Q",
    authDomain: "zen-nuxt.firebaseapp.com",
    databaseURL: "https://zen-nuxt.firebaseio.com",
    projectId: "zen-nuxt",
    storageBucket: "zen-nuxt.appspot.com",
    messagingSenderId: "71012090149"
  })
}

firebase.firestore().settings({ timestampsInSnapshots: true })

const db = firebase.firestore()
const storage = firebase.storage() //if use storage

export { storage, db }