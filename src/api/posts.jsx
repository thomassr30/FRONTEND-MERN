import axios from "axios";

export const getPostRequest = async () => {
    return await axios.get('http://localhost:4000/posts')
}