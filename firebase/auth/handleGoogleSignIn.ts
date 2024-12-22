import { UserCredential } from "firebase/auth";

export const handleGoogleSignIn = async (
  signInWithGoogle: () => Promise<UserCredential | undefined>,
  onClose: () => void,
  refresh: () => void
) => {
  try {
    const userCredential = await signInWithGoogle();
    if (userCredential) {
      console.log("User signed in:", userCredential.user);
    }
    onClose();
    refresh();
  } catch (e) {
    console.error("Error during Google sign in:", e);
  }
};
