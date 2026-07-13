import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [showLogin, setShowLogin] = useState(false);

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