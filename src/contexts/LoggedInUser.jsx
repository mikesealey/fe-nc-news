import { createContext } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = createContext('tickle122') // Default user is tickle122 - Once a login page is created it can be changed.

    return (
        
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}

