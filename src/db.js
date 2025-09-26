
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAIoOPpEKPceZfQsCM0dJP-cM1s3nU5vN4",
  authDomain: "alebrijos-a627e.firebaseapp.com",
  projectId: "alebrijos-a627e",
  storageBucket: "alebrijos-a627e.appspot.com",
  messagingSenderId: "664323271010",
  appId: "1:664323271010:web:57fce9082449d10a2c243b",
  measurementId: "G-MZ4NBLSZ9J"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const db = getFirestore(app);
