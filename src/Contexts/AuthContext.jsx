import { createContext } from "react";
const toggleAuth  = createContext();
export const AuthContextProvider  = ({children}) => {
    return (
    <>
        <toggleAuth.Provider value={23}>
            {children}
            </toggleAuth.Provider>
    </> 
    )
};