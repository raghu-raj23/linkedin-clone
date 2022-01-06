import {initializeApp} from 'firebase/app';
import  {getAuth, GoogleAuthProvider } from 'firebase/auth';
import  {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCYQEFfgixxw6cpKOWYuJ6SLZbAKy7VcCg",
    authDomain: "linkedin-clone-f75f8.firebaseapp.com",
    projectId: "linkedin-clone-f75f8",
    storageBucket: "linkedin-clone-f75f8.appspot.com",
    messagingSenderId: "39294545936",
    appId: "1:39294545936:web:31df6dbb356e285073da95"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
