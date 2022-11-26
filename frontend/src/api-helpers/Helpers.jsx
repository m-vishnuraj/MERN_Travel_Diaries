import axios from 'axios';

export const getAllPosts = async () => {
    const res = await axios.get("/posts");
    if (res.status !== 200) {
        return console.log("Some error occurred");
    }

    const data = res.data;
    return data;
}

export const sendAuthRequest = async (signUp, data) => {
    const res = await axios.post(`/user/${signUp ? "signup" : "login"}/`, {
        name: data.name ? data.name : "",
        email: data.email,
        password: data.password,
    }).catch((err) => console.log(err));
    if (res.status !== 200 && res.status !== 201) {
        return console.log("Unable to Authenticate");
    }
    const resData = await res.data;
    return resData;
};

export const addPost = async (data) => {
    const res = await axios.post("/posts/", {
        title: data.title,
        description: data.description,
        location: data.location,
        image: data.imageUrl,
        date: data.date,
        user: localStorage.getItem("userId"),
    }).catch((err) => console.log(err));
    if (res.status !== 201) {
        return console.log("Error Occurred");
    }

    const resData = await res.data;
    return resData;
}


export const getPostDetails = async (id) => {
    const res = await axios.get(`/posts/${id}`).catch((err) => console.log(err));
    if (res.status !== 200) {
        return console.log("Unable to fetch diary");
    }

    const resData = await res.data;
    return resData;
};

export const postUpdate = async (data, id) => {
    const res = await axios
        .put(`/posts/${id}`, {
            title: data.title,
            description: data.description,
            location: data.location,
            image: data.imageUrl,
        })
        .catch((err) => console.log(err));

    if (res.status !== 200) {
        return console.log("Unable to update");
    }

    const resData = await res.data;
    return resData;
};


export const postDelete = async (id) => {
    const res = await axios.delete(`/posts/${id}`)
        .catch((err) => console.log(err));
    if (res.status !== 200) {
        return console.log("Unable to delete");
    }

    const data = await res.data;
    return data;
}
