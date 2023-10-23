import {
  getAuth,
  RecaptchaVerifier,
  getReactNativePersistence,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

// Get the Firebase auth instance

// Export auth

const firebaseConfig = {
  apiKey: "AIzaSyDe7VB0-WkFEFMgx-_H0Mw195aE2rNI4mE",
  authDomain: "e-commerce-app-75748.firebaseapp.com",
  projectId: "e-commerce-app-75748",
  storageBucket: "e-commerce-app-75748.appspot.com",
  messagingSenderId: "571476852217",
  appId: "1:571476852217:web:a3e90b79047d2053c4d128",
  measurementId: "G-Q8S0MZW67C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Get the Firebase auth instance
const auth = getAuth(app);
// Export auth
export { auth };