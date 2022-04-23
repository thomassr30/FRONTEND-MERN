import { useState, createContext, useContext, useEffect } from "react"
import {getPostRequest} from '../api/posts'

const postContext = createContext()

export const usePost = () => {
    const context = useContext(postContext)
    return context
}

export const PostProvider = ({children}) => {
    
    const [post, setpost] = useState([])

    const getPost = async () => {
        const res = await getPostRequest()
        setpost(res.data)
    }

    useEffect(() => {
        getPost()
      }, [])
    
    return(
        <postContext.Provider
            value={{
                post,
                getPost
            }}
        >
            {children}
        </postContext.Provider>
    )
}