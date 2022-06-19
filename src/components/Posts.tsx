import { PostType } from "../types";
import Post from "./Post";

interface Props {
  posts: PostType[];
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grow">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
export default Posts;
