import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [showLogin, setShowLogin] = useState(true);
    

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
       
    }

    return (
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    )
}