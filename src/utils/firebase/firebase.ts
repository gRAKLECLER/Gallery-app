import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZwAMIyUK74jA4Of4A9afCTKie706z1Yo",
  authDomain: "gallery-app-b8f5b.firebaseapp.com",
  projectId: "gallery-app-b8f5b",
  storageBucket: "gallery-app-b8f5b.appspot.com",
  messagingSenderId: "925135929416",
  appId: "1:925135929416:web:b4484a086dd29ce974587d"
};

const firebase = initializeApp(firebaseConfig);

// Initialize Firebase
export default firebase;