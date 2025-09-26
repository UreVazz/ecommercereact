import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CreateItemBD from "./assets/components/CreateItemBD.jsx";
import TraerCollection from './assets/components/TraerCollection.jsx';
import UploadData from './assets/components/UploadData.jsx';

import App from './App.jsx'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIoOPpEKPceZfQsCM0dJP-cM1s3nU5vN4",
  authDomain: "alebrijos-a627e.firebaseapp.com",
  projectId: "alebrijos-a627e",
  storageBucket: "alebrijos-a627e.firebasestorage.app",
  messagingSenderId: "664323271010",
  appId: "1:664323271010:web:57fce9082449d10a2c243b",
  measurementId: "G-MZ4NBLSZ9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <>
    <App />
    {/* <UploadData/> */}
  </>
)
