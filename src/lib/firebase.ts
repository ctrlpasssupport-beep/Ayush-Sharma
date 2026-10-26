import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDocFromServer } from "firebase/firestore";
import firebaseConfig from "@/firebase-applet-config.json";

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// CRITICAL: Must pass firestoreDatabaseId
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// Test connection on boot
if (typeof window !== "undefined") {
  getDocFromServer(doc(db, "test", "connection")).catch((error) => {
    if (error instanceof Error && error.message.includes("the client is offline")) {
      console.warn("[Firebase] Offline mode or connection check failed.");
    }
  });
}
