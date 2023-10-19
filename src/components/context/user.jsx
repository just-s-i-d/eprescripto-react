import { createContext, useState } from "react";

export const UserContext=createContext({
    isLoginBoxShow:false,
    setIsLoginBoxShow:()=>null,
})

export const UserProvider=({children})=>{
    const [isLoginBoxVisible,setIsLoginBoxVisible]=useState(false)
    const value={
        isLoginBoxVisible,setIsLoginBoxVisible
    }
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}