import Post from "../models/Post";

// get all posts
export const getAllPost = async (req, res) => {
  let posts;
  try {
    posts = await Post.find();
  } catch (err) {
    console.log(err);
  }
  if (!posts) {
    return res.status(500).json({ message: "Unexpected error occured" });
  }

  res.status(200).json({ posts: posts });
};

// add post
export const addPost = async (req, res) => {
  const { title, description, image, location, date, user } = req.body;
  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !image &&
    image.trim() === "" &&
    !location &&
    location.trim() === "" &&
    !date &&
    !user
  ) {
    return res.status(422).json({ message: "Invalid Data" });
  }

  let post;
  try {
    post = new Post({
      title,
      description,
      image,
      location,
      date: new Date(`${date}`),
      user,
    });
    post = await post.save();
  } catch (err) {
    console.log(err);
  }
  if (!post) {
    return res.status(500).json({ message: "Unexpected error occurred" });
  }
  return res.status(201).json({ post: post });
};

// get post by id

export const getPostById = async (req, res) => {
  const id = req.params.id;

  let post;

  try {
    post = await Post.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  return res.status(200).json({ post: post });
};

// update post

export const updatePost = async (req, res) => {
  const id = req.params.id;
  const { title, description, image, location, date } = req.body;
  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !image &&
    image.trim() === "" &&
    !location &&
    location.trim() === "" &&
    !date
  ) {
    return res.status(422).json({ message: "Invalid Data" });
  }
  let post;
  try {
    post = await Post.findByIdAndUpdate(id, {
      title,
      description,
      image,
      location,
      date: new Date(`${date}`),
    });
  } catch (err) {
    console.log(err);
  }
  if (!post) {
    return res.status(500).json({ message: "Unable to Update" });
  }
  return res.status(200).json({ message: "Updated Successfully", post: post });
};

// delete post
