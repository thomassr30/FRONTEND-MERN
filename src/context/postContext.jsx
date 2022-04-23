import { useState, createContext, useContext } from "react"

const postContext = createContext()

export const usePost = () => {
    const context = useContext(postContext)
    return context
}

export const PostContainer = ({children}) => {
    
    const [post, setpost] = useState([])
    console.log(post)
    return(
        <postContext.Provider
            value={{
                post,
                setpost
            }}
        >
            {children}
        </postContext.Provider>
    )
}