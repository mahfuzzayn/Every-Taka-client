/* eslint-disable react-refresh/only-export-components */

import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    type User,
    type UserCredential,
} from "firebase/auth";
import app from "@/config/firebase.config";

export interface AuthContextType {
    user: User | null;
    loading: boolean;
    userLogIn: (email: string, password: string) => Promise<UserCredential>;
    userRegister: (email: string, password: string) => Promise<UserCredential>;
    userUpdateProfile: (email: string, password: string) => Promise<void>;
    userGoogleSignIn: () => Promise<UserCredential>;
    userGithubSignIn: () => Promise<UserCredential>;
    userLogOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const auth = getAuth(app);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();

    const userLogIn = (email: string, password: string) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const userRegister = (email: string, password: string) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userUpdateProfile = (name: string, photo: string) => {
        if (!auth?.currentUser) {
            return Promise.reject(new Error("No authenticated user"));
        }

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };

    const userGoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    };

    const userGithubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubAuthProvider);
    };

    const userLogOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo: AuthContextType = {
        user,
        loading,
        userLogIn,
        userRegister,
        userUpdateProfile,
        userGoogleSignIn,
        userGithubSignIn,
        userLogOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
