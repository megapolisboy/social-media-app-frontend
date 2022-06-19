import Form from "../components/Form";
import Header from "../components/Header";
import Posts from "../components/Posts";
import { useAppSelector } from "../app/hooks";

import { PostType } from "../types";
import { RootState } from "../app/store";
import { useState } from "react";

interface Props {
  posts: PostType[];
}

const MainPage = () => {
  let posts = useAppSelector((state: RootState) => state.posts.posts);
  const [isFormShown, setIsFormShown] = useState(false);

  const makeFormVisible = () => {
    setIsFormShown(true);
  };

  const makeFormInvisible = () => {
    setIsFormShown(false);
  };

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex flex-col space-between w-full mt-6 md:gap-5">
        {!isFormShown && (
          <button
            onClick={makeFormVisible}
            className="fixed bottom-5 right-5 bg-white border-4 border-black text-black z-20 rounded-full text-5xl w-16 h-16 pb-8 hover:bg-black hover:text-white hover:scale-110 "
          >
            +
          </button>
        )}
        {isFormShown && (
          <div
            className="fixed top-0 left-0 w-full h-[100vh] flex items-center justify-center z-10 bg-black/60"
            onClick={makeFormInvisible}
          >
            <Form />
          </div>
        )}
        <Posts posts={posts} />
      </div>
    </div>
  );
};
export default MainPage;
