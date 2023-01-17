import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";
import EditPost from "./EditPost";

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove }) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    remove(post);
  };

  const navigate = useNavigate();

  return (
    <div key={post.id} style={{ border: "1px solid green" }}>
      {post.id}. {post.title}
      <p>{post.body}</p>
      <button onClick={handleRemove}>delete</button>
      <Link to={`/edit/${post.id}`}>
        <button onClick={() => {}}>edit</button>
      </Link>
    </div>
  );
};

export default PostItem;
