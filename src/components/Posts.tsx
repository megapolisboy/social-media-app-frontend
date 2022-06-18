
import { PostType } from "../types";
import Post from "./Post";

interface Props {
  posts: PostType[];
  
}

const Posts: React.FC<Props> = ({posts}) => {

  return (
    <div className="grow ">
      <div className="grid gap-5 md:grid-cols-cards-1 grid-cols-cards-2 grid-rows-r1">
        {posts.map((post) => (
          <Post post={post} key={post.id} test={() => 1} />
        ))}
      </div>
    </div>
  );
};
export default Posts;
