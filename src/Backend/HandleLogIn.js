import { Alert } from "react-native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { useNavigation } from "@react-navigation/native";

const handleAuthentication = async (email,password,navigation) => {
  if (email.trim() === "" || password.trim() === "") {
    Alert.alert("Please enter email and password");
    return;
  }
  if (password.length < 6) {
    Alert.alert("Password should be at least 6 characters");
    return;
  }

  try {
    // Try to sign in the user with email and password
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Signed in with:", user.email);
        // Navigate to the HomePage
        navigation.navigate("HomePage");
      })
      .catch(async (error) => {
        // If sign in fails, try to create a new user with email and password
        if (error.code === "auth/wrong-password") {
          Alert.alert("Error", "Wrong password. Please try again.");
        }
        if (
          (error.code === "auth/user-not-found" ||
            error.code === "auth/invalid-login-credentials") &&
          !(error.code === "auth/email-already-in-use")
        ) {
          try {
            const userCredentials =
              await createUserWithEmailAndPassword(
                auth,
                email,
                password
              );
            const user = userCredentials.user;
            console.log("Registered with:", user.email);
            // Navigate to the HomePage
            navigation.navigate("HomePage");
          } catch (error) {
            Alert.alert("Error", "Wrong password. Please try again.");
          }
        } else {
          console.log(error);
        }
      });
  } catch (error) {
    // console.error(error);
  }
};

export {handleAuthentication}