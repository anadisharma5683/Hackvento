import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID!
};

// Only initialize Firebase on the client side
function getFirebaseApp() {
  if (typeof window !== 'undefined') {
    return getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  }
  throw new Error("Firebase can only be initialized on the client side");
}

export function getAuthInstance() {
  const app = getFirebaseApp();
  return getAuth(app);
}

export function getFirestoreInstance() {
  const app = getFirebaseApp();
  return getFirestore(app);
}

// Create getters for use in components
export const getFirebaseAuth = () => getAuthInstance();
export const getFirebaseFirestore = () => getFirestoreInstance();