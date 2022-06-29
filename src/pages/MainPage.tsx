import Form from "../components/Form";
import Header from "../components/Header";

import { useAppSelector } from "../app/hooks";

import { useState } from "react";
import Posts from "../components/PostStuff/Posts";

interface Props {
  mode: "Feed" | "Page";
}

const MainPage: React.FC<Props> = ({ mode }) => {
  const [isFormShown, setIsFormShown] = useState(false);

  const makeFormVisible = () => {
    setIsFormShown(true);
  };

  const makeFormInvisible = () => {
    setIsFormShown(false);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col space-between w-full mt-6 md:gap-5">
        {!isFormShown && mode === "Page" && (
          <button
            onClick={makeFormVisible}
            className="fixed bottom-5 right-5 bg-white w-16 h-16 border-4 border-black text-black z-20 rounded-full text-5xl hover:bg-black hover:text-white hover:scale-110 "
          >
            <span>+</span>
          </button>
        )}
        {isFormShown && (
          <div
            className="fixed top-0 left-0 w-full h-[100vh] flex items-center justify-center z-10 bg-black/60"
            onClick={makeFormInvisible}
          >
            <Form makeFormInvisible={makeFormInvisible} />
          </div>
        )}
        <Posts mode={mode} />
      </div>
    </div>
  );
};
export default MainPage;
