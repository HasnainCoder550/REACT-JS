import { createContext } from "react";


const userData = {
  name : "Muhammad Hasnain",
  email : "codermhasnain@gmail.com"
}

const UserContext = createContext()

export const UserProvider = ({children}) => {
    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContext