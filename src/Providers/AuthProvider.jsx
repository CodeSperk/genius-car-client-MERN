/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  // Creater User with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, provider);
  }
  
  const logoutUser = () => {
    setLoading(true)
    return signOut(auth);
  }

  useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = {email: userEmail}

      setUser(currentUser);
      setLoading(false);
      if(currentUser){
        axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials: true})
        .then(res => {
          console.log('token response', res.data);
        })
      }
      else{
        axios.post('http://localhost:5000/logout', loggedUser, {withCredentials: true})
        .then(res => {
          console.log(res.data);
        })
      }
    });
    return () => {
      unSubscribe();
    }
  });

  const authInfo = {
      user,
      loading,
      createUser,
      googleLogin,
      loginUser,
      logoutUser
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;