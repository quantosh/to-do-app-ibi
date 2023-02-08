import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA9l_pDyXdKxwpS3YDheeOxeHv7yaM3vlM',
  authDomain: 'to-do-app-ibi.firebaseapp.com',
  projectId: 'to-do-app-ibi',
  storageBucket: 'to-do-app-ibi.appspot.com',
  messagingSenderId: '1040169712931',
  appId: '1:1040169712931:web:f979f69b0fe586d525a096',
  measurementId: 'G-MYBN18Y3KM'
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
