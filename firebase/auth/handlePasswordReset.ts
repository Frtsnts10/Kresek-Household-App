import { auth } from "@/firebase/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

export const handlePasswordReset = async (
  email: string,
  setEmailError: (msg: string) => void
) => {
  setEmailError("");

  if (!email) {
    setEmailError("Please enter your email address.");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    // alert("Password reset email sent! Please check your inbox.");
  } catch (e) {
    console.error("Error during password reset:", e);
    setEmailError("Failed to send password reset email. Please try again.");
  }
};
