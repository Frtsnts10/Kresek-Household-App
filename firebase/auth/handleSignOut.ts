import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

export const handleSignOut = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully.");
  } catch (e) {
    console.error("Error during sign-out:", e);
  }
};
