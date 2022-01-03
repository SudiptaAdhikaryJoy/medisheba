import { useEffect, useState } from 'react';
import initializeFirebase from '../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    // register user
    const registerUser = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');          
        })
        .catch((error) => {
             setAuthError(error.message);
            
        })
        .finally(()=> setIsLoading(false));
    }

    // login user
    const loginUser = (email, password)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(()=> setIsLoading(false));
    }

    // observe user state management
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            setUser(user);
        } else {
            setUser({})
        }
        setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    // logout user
        const logOut = () => {
            setIsLoading(true);
            signOut(auth).then(() => {
                // Sign-out successful.
                }).catch((error) => {
                // An error happened.
            })
            .finally(()=> setIsLoading(false));

    }

    return {
        user,
        isLoading,
        registerUser,
        loginUser,
        logOut,
        authError
    }
}

export default useFirebase;