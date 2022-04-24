import { useState, createContext, useContext, useEffect } from "react"
import {
    getPostRequest, 
    createPostRequest,
    deletePostRequest,
    getPostWithIdRequest
} from '../api/posts'

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

    const deletePost = async (id) => {
        const res = await deletePostRequest(id)
        if(res.status === 204){
            setpost( post.filter(item => item._id !== id))
        }
       
    }

    const getPostWithId = async (id) => {
        const res = await getPostWithIdRequest(id)
        return res.data
    }

    useEffect(() => {
        getPost()
      }, [])
    
    return(
        <postContext.Provider
            value={{
                post,
                getPost,
                createPost,
                deletePost,
                getPostWithId
            }}
        >
            {children}
        </postContext.Provider>
    )
}