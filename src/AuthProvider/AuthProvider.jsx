import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from './firebase.config';
import axios from "axios";
export const MyAuth = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);
    const createUser = (email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    const signIn = (email,pass)=>{
       return signInWithEmailAndPassword(auth,email,pass)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            const userEmail = currentUser?.email || currentUser?.reloadUserInfo?.providerUserInfo[0]?.screenName+"@github.com";
            const loggedUser = {email: userEmail}
            console.log(loggedUser)
            setUser(currentUser);
            setLoader(false);
            if(currentUser){
                axios.post('https://learnx-omega.vercel.app/jwt',loggedUser,{withCredentials:true})
                .then(res=> console.log(res.data))
            }else{
                axios.post("https://learnx-omega.vercel.app/logout",loggedUser,{withCredentials:true})
                .then(res => console.log(res.data))
            }
        });
        return ()=> unSubscribe();
    })
    const authValue = {user,setUser,loader,createUser,signIn,logOut}
    return (
       <MyAuth.Provider value={authValue}>
        {children}
       </MyAuth.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;