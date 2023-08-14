import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import app from '../firebase/Firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateProfileInfo = (data) => {
        return updateProfile(auth.currentUser, data);
    }
    const authInfo = {
        createUser,
        updateProfileInfo
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;