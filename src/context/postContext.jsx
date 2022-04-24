import { useState, createContext, useContext, useEffect } from "react"
import {getPostRequest, createPostRequest} from '../api/posts'

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

    const createPost = async (postNew) => {
        await createPostRequest(postNew)
        setpost([...post, postNew])
    }

    useEffect(() => {
        getPost()
      }, [])
    
    return(
        <postContext.Provider
            value={{
                post,
                getPost,
                createPost
            }}
        >
            {children}
        </postContext.Provider>
    )
}