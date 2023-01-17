import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";

export interface INewPost {
  title: string;
  body: string;
  userId: number;
  id?: number;
}

const EditPost: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState<IPost>({
    title: "",
    body: "",
    userId: 777,
    id: 0,
  });

  const [updatePost] = postAPI.useUpdatePostMutation();
  async function getOnePost() {
    const { data } = await axios(`http://localhost:8000/posts/${id}`);
    setPost(data);
  }

  useEffect(() => {
    getOnePost();
  }, []);

  const handleInp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPost = {
      ...post,
      [e.target.name]: e.target.value,
      id: Number(id),
    };
    console.log(newPost);

    setPost(newPost);
  };

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updatePost(post as IPost);
    console.log(post);
  };

  return (
    <form>
      <input
        onChange={handleInp}
        name="title"
        type="text"
        placeholder="title"
        value={post.title}
      />
      <input
        onChange={handleInp}
        name="body"
        type="text"
        placeholder="body"
        value={post.body}
      />
      <button
        onClick={(e) => {
          handleUpdate(e);
          navigate("/posts");
        }}
      >
        save changes
      </button>
    </form>
  );
};

export default EditPost;
