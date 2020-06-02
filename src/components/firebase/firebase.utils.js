import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAimN_oAdzkda-rZL7RQ_IRio6fdWcQE-g",
    authDomain: "crwn-db-55bea.firebaseapp.com",
    databaseURL: "https://crwn-db-55bea.firebaseio.com",
    projectId: "crwn-db-55bea",
    storageBucket: "crwn-db-55bea.appspot.com",
    messagingSenderId: "323593545349",
    appId: "1:323593545349:web:7fb1e0d8e198f117e0abec",
    measurementId: "G-TR1P76MNCD"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase