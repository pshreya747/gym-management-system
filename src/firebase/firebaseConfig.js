import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCeMt7EUGR7JdEqW86n1A3S8FqbZk625To",
    authDomain: "gym-management-system-23806.firebaseapp.com",
    projectId: "gym-management-system-23806",
    storageBucket: "gym-management-system-23806.appspot.com",
    messagingSenderId: "631704217171",
    appId: "1:631704217171:web:9488e7ecec30cb795d48a6",
    measurementId: "G-D3HT4TFG9J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
