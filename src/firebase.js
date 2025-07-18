// // src/firebase.js
// import { initializeApp, getApps, getApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// // Firebase configuration from the Canvas environment
// const firebaseConfig = {
//   apiKey: "AIzaSyDxCxACtVK1CPbR_RKCtfndgGuUhjncWtE",
//   authDomain: "vetmeet-18811.firebaseapp.com",
//   projectId: "vetmeet-18811",
//   storageBucket: "vetmeet-18811.firebasestorage.app",
//   messagingSenderId: "208217151612",
//   appId: "1:208217151612:web:96c193b5beb39ca85351f9",
//   measurementId: "G-VWBP43SYEG"
// };

// // Initialize Firebase App
// let app;
// if (!getApps().length) {
//   // Check if API key is present before initializing
//   if (!firebaseConfig.apiKey) {
//     console.error("Firebase Initialization Error: API Key is missing in __firebase_config.");
//     // You might want to throw an error or handle this more gracefully in a real app
//   }
//   app = initializeApp(firebaseConfig);
// } else {
//   app = getApp(); // Use the existing app if already initialized
// }

// // Initialize Firebase services
// const auth = getAuth(app);
// const db = getFirestore(app);

// // Export the initialized services
// export { app, auth, db };




// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth, RecaptchaVerifier } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDxCxACtVK1CPbR_RKCtfndgGuUhjncWtE",
//   authDomain: "vetmeet-18811.firebaseapp.com",
//   projectId: "vetmeet-18811",
//   storageBucket: "vetmeet-18811.firebasestorage.app",
//   messagingSenderId: "208217151612",
//   appId: "1:208217151612:web:96c193b5beb39ca85351f9",
//   measurementId: "G-VWBP43SYEG"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth, RecaptchaVerifier };
