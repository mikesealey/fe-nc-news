import { createContext, useState } from "react";


export const UserContext = createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState('tickle122') 
    // Default user is tickle122 - Once a login page is created it can be changed.

    return (
        
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

