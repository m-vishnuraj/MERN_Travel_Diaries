import Post from "../models/Post";

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
