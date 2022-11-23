import axios from 'axios';

export const getAllPosts = async () => {
    const res = await axios.get("http://localhost:5000/posts");
    if (res.status !== 200) {
        return console.log("Some error occurred");
    }

    const data = res.data;
    return data;
}