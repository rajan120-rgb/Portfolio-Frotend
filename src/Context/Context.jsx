import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [popUp , setPopUp] = useState(false)
    const [showLogin, setShowLogin] = useState(true);
     const [loading, setLoading] = useState(true);
     const [token , setToken] = useState(
         localStorage.getItem("token") || ""
     )
    

    const openLogin = ()=> {
        setShowLogin(true);
    }
    const closeLogin = ()=> {
        setShowLogin(false);
       
    }

    const value = {
        showLogin,
        openLogin,
        closeLogin,
        loading,
        setLoading,
        setToken,
        token,
        popUp,
        setPopUp,
       
    }

    return (
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    )
}