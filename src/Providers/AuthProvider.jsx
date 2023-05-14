import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    } 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user in Auth Provider', currentUser);
            setLoading(false);
            if(currentUser && currentUser.email){
                const loggedUser = {
                    email: currentUser.email
                  }
                fetch(`https://car-doctor-server-ten-blond.vercel.app/jwt`,{
                    method: 'POST',
                    headers:{
                      'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                  })
                  .then(response => {
                    return response.json()
                  } )
                  .then(data => {
                    console.log('jwt response', data)
                    // waning : local storage is not the best (second best place)
                    // to store access token
                    localStorage.setItem('car-access-token', data.token)
                  })
            }
            else{
                localStorage.removeItem('car-access-token')

            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser, 
        signIn, 
        logOut,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;