import { FirebaseApp, getApp, getApps, initializeApp } from "@firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCRcU9aMha7BxvCSmmDgkwfREslPvvp6g4",
    authDomain: "fir-mfa-73cf9.firebaseapp.com",
    projectId: "fir-mfa-73cf9",
    storageBucket: "fir-mfa-73cf9.appspot.com",
    messagingSenderId: "249258505950",
    appId: "1:249258505950:web:bcebfd9ff6e06f6702344f"
};

let app: FirebaseApp;

if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

export { app }