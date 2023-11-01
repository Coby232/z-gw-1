import { Alert } from "react-native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import uuid from "react-native-uuid";

const userid = uuid.v4();
const userInfo = {
  username: "username",
  email: "email",
  password: "password",
  createdAt: new Date(),
  modifiedAt: new Date(),
};

const handleUserDetails = async (username, email, password) => {
  userInfo.username = username;
  userInfo.email = email;
  userInfo.password = password;
  userInfo.createdAt = new Date();
  userInfo.modifiedAt = new Date();
};
// let verified = Boolean;

const signUp = async (
  username,
  email,
  password,
  confirmedPassword,
  navigation
) => {
  if (email.trim() === "" || password.trim() === "") {
    Alert.alert("Please enter email and password");
    return;
  }
  if (password.length < 6) {
    Alert.alert("Password should be at least 6 characters");
    return;
  }
  if (password === confirmedPassword) {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
      .catch(async (error) => {
        if (
          (error.code === "auth/user-not-found" ||
            error.code === "auth/invalid-login-credentials") ||
          (error.code === "auth/email-already-in-use")
        ) {
          Alert.alert(
            "Account Exists",
            "You are trying to sign up with and existing account"
          );
        }
      })
      .then(async () => {
        handleUserDetails(username, email, password);
        await setDoc(doc(db, "users", userid), userInfo);
        navigation.navigate("HomePage");
      });
    // const user = userCredentials.user;
    // console.log("Registered with:", user.email);
  } else {
    Alert.alert("Not working", "didnt work, still error");
  }
};

// Sign in with email and password
const signIn = async (email, password, navigation) => {
  if (email.trim() === "" || password.trim() === "") {
    Alert.alert("Please enter email and password");
    return;
  }
  if (password.length < 6) {
    Alert.alert("Password should be at least 6 characters");
    return;
  }
  try {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Signed in with:", user.email);
        // Navigate to the HomePage
        navigation.navigate("HomePage");
      })
      .catch(async (error) => {
        Alert.alert("Error", `${error}`);
      });
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

export { signUp, signIn };
