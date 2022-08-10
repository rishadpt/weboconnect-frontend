import React, { createContext, useContext } from 'react'


export const EssentialContext = createContext(null);

export const useAuth = () => {
    return useContext(EssentialContext);
}
export default function Essentialprovider({ children }) {




    return (
        <EssentialContext.Provider value={children}>
            {children}
        </EssentialContext.Provider>

    )
}
