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
