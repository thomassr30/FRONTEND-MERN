import axios from "axios";

export const getPostRequest = async () => {
    return await axios.get('http://localhost:4000/posts')
}

export const createPostRequest = async (post) => {
    return await axios.post('http://localhost:4000/posts', post)
}

export const deletePostRequest = async (id) => {
    return await axios.delete(`http://localhost:4000/posts/${id}`)
}

export const getPostWithIdRequest = async (id) => {
    return await axios.get(`http://localhost:4000/posts/${id}`)
}

export const updatePostRequest = async (id, newData) => {
    return await axios.put(`http://localhost:4000/posts/${id}`, newData)
}