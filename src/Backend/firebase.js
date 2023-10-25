
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";

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
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });

// Get the Firebase auth instance
// const auth = getAuth(app);
// Configure persistence to use AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
// Export auth
export { auth };