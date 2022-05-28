import { PostType } from "../types";
import Post from "./Post";

interface Props {
  posts: PostType[];
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grow">
      <h1>Posts</h1>
      <div className="grid grid-cols-3">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
};
export default Posts;
