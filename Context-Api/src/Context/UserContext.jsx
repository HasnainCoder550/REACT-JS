import { createContext, useContext } from "react";

const user = {
    name : "Muhammad Hasnain",
    email : "codermhasnain@gmail.com"
}

const UserContext = createContext()





const UserProvider = ({children}) => {


    return(
        <UserContext.Provider value={user}>
          {children}
        </UserContext.Provider>
    )
}


export {UserProvider}
export default UserContext