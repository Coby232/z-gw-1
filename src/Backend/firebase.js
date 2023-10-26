
import { initializeApp } from "firebase/app";
import {
  getAuth,
  getReactNativePersistence,
  initializeAuth,
  setPersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebaseConfig from "./firebaseConfig"; // Import your Firebase configuration

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

auth.setPersistence(getReactNativePersistence(AsyncStorage));

export { auth };


// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });
