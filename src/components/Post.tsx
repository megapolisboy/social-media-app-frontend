import { PostType } from "../types";

interface Props {
  post: PostType;
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <div>
      <h2>Post</h2>
      <div>{post.creator}</div>
      <div>{post.title}</div>
      <div>{post.message}</div>
    </div>
  );
};
export default Post;
