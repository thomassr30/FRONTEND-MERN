import axios from "axios";

export const getPostRequest = async () => {
    return await axios.get('http://localhost:4000/posts')
}

export const createPostRequest = async (post) => {
    const form  = new FormData

    for(let key in post){
        form.append(key, post[key]) 
    }

    return await axios.post('http://localhost:4000/posts', form, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

export const deletePostRequest = async (id) => {
    return await axios.delete(`http://localhost:4000/posts/${id}`)
}

export const getPostWithIdRequest = async (id) => {
    return await axios.get(`http://localhost:4000/posts/${id}`)
}

export const updatePostRequest = async (id, post) => {

    const form  = new FormData

    for(let key in post){
        form.append(key, post[key]) 
    }

    return await axios.put(`http://localhost:4000/posts/${id}`, form, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}