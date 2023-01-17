import React, { FC, useState } from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";
export interface INewPost {
  title: string;
  body: string;
  userId: number;
}

const AddPost: FC = () => {
  const [post, setPost] = useState<INewPost>({
    title: "",
    body: "",
    userId: 777,
  });

  const [createPost, {}] = postAPI.useCreatePostMutation();

  const handleInp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPost = { ...post, [e.target.name]: e.target.value };
    setPost(newPost);
  };

  const handleCreate = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await createPost(post as IPost);
  };

  return (
    <form>
      <input
        onChange={handleInp}
        name="title"
        type="text"
        placeholder="title"
      />
      <input onChange={handleInp} name="body" type="text" placeholder="body" />
      <button onClick={handleCreate}>create post</button>
    </form>
  );
};

export default AddPost;
