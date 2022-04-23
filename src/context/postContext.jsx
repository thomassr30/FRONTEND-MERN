import { useState, createContext, useContext } from "react"

const postContext = createContext()

export const usePost = () => {
    const context = useContext(postContext)
    return context
}

export const PostProvider = ({children}) => {
    
    const [post, setpost] = useState([])

    const getPost = () => {
        
    }
    
    return(
        <postContext.Provider
            value={{
                post
            }}
        >
            {children}
        </postContext.Provider>
    )
}