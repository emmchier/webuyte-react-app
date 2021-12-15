import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_MESSANING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

initializeApp(firebaseConfig);

export const getCollection = (col) => {
  const db = getFirestore();
  const ref = collection(db, col);
  return ref;
};

export const getItemById = (col, itemId) => {
  const db = getFirestore();
  const item = doc(db, col, itemId);
  return item;
};
