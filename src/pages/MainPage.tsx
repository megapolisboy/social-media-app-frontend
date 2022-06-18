import Form from "../components/Form";
import Header from "../components/Header";
import Posts from "../components/Posts";
import { useAppSelector } from "../app/hooks";

import { PostType } from "../types";
import { RootState } from "../app/store";

interface Props {
  posts: PostType[];
}

const MainPage = () => {
  let posts = useAppSelector((state: RootState) => state.posts.posts);
  return (
    <div className="flex flex-col items-center mx-3 my-3">
      <Header />
      <div className="grid grid-cols-main-content w-full mt-6">
        <Posts
          posts={posts}
        />
        <Form />
      </div>
    </div>
  );
};
export default MainPage;
