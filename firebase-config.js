// Paste your Firebase web app config here (Firebase console > Project settings > Your apps > Web app).
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBSdkAGmx7zDwPP1h85bWsqlSTM8PKzFuY",
    authDomain: "beerleague-1a4ee.firebaseapp.com",
    projectId: "beerleague-1a4ee",
    storageBucket: "beerleague-1a4ee.firebasestorage.app",
    messagingSenderId: "1090229035212",
    appId: "1:1090229035212:web:d710f23d4e0e58f2622269",
    measurementId: "G-YMF0GBDMWQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
// These values are not secrets. Your data is protected by firestore.rules.
// While apiKey still says PASTE..., the app runs in "this phone only" mode for testing.
window.FIREBASE_CONFIG = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};
