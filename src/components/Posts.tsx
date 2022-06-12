import { PostType } from "../types";
import Post from "./Post";

interface Props {
  posts: PostType[];
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grow">
      <h1>Posts</h1>
      <div className="grid gap-5 md:grid-cols-cards-1 grid-cols-cards-2 grid-rows-r1">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
};
export default Posts;
