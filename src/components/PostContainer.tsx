import React, { FC } from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

export interface PostContainerProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostContainer: FC = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(100);

  const [deletePost] = postAPI.useDeletePostMutation();

  const handleDelete = (post: IPost) => {
    deletePost(post);
  };

  return (
    <div>
      {isLoading && <h2>Fetching posts</h2>}
      {error && <h3>posts fetching error</h3>}

      {posts &&
        posts.map((post: IPost) => (
          <PostItem remove={handleDelete} key={post.id} post={post} />
        ))}
    </div>
  );
};

export default PostContainer;
