import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: 'AIzaSyAuLtkJsMB-lVYHX7vOV7bHAGXjZQhS1h4',
    authDomain: 'contact-form-65ef8.firebaseapp.com',
    projectId: 'contact-form-65ef8',
    storageBucket: 'contact-form-65ef8.appspot.com',
    messagingSenderId: '233637521516',
    appId: '1:233637521516:web:b6cacca2ae6b93b99e9049',
    measurementId: 'G-PSZW1DHSNV',
}

const fireDb = firebase.initializeApp(firebaseConfig)
export default fireDb.database().ref()
