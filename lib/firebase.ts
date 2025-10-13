declare const firebase: any;

const firebaseConfig = {
  apiKey: "AIzaSyBhSS5mrCfyEu2nU3MIMpXLF5m7i9bUwB0",
  authDomain: "jolan-3f280.firebaseapp.com",
  databaseURL: "https://jolan-3f280-default-rtdb.firebaseio.com",
  projectId: "jolan-3f280",
  storageBucket: "jolan-3f280.firebasestorage.app",
  messagingSenderId: "706904744649",
  appId: "1:706904744649:web:5d1a4504cb76feec94e318",
  measurementId: "G-B7JPMFR3VM"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const app = firebase.app();
// Get a reference to the database service
export const db = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();

// Assign the global firebase object to a module-scoped constant to allow it to be exported.
const firebaseInstance = firebase;
export { firebaseInstance as firebase };