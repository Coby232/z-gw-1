
import { initializeApp } from "firebase/app";
import {
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebaseConfig from "./firebaseConfig"; // Import your Firebase configuration
import { getFirestore } from "firebase/firestore";


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
auth.setPersistence(getReactNativePersistence(AsyncStorage));

export { auth,app ,db};
