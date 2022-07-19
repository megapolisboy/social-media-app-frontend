import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import AvatarImage from "../components/UI/AvatarImage";
import Comments from "../components/CommentsStuff/Comments";
import RecomendationsWheel from "../components/RecomendationsWheel";
import { RootState } from "../app/store";
import { UserType } from "../types";
import React, { useState } from "react";
import Menu from "../components/Menu";
import MobileMenu from "../components/Mobile/MobileMenu";
import MainPart from "../components/PostPageComponents/MainPart";
import UserStuff from "../components/UserStuff";
import Form from "../components/Form";

const PostDetailsPage: React.FC = () => {
  const { id } = useParams();
  const post = useAppSelector((state: RootState) =>
    state.posts.posts.find((post) => post._id === id)
  );

  const [isFormShown, setIsFormShown] = useState(false);
  

  const makeFormVisible = () => {
    setIsFormShown(true);
  };

  const makeFormInvisible = () => {
    setIsFormShown(false);
  };


  return (
    <div className="md:p-4 h-full min-h-screen md:h-screen bg-gradient-to-r from-purple-100 to-purple-300">
      <div className="flex min-h-screen lg:min-h-fit flex-col md:flex-row h-full gap-3 rounded-3xl px-3 py-2 bg-gradient-to-r from-slate-100 to-purple-200 border-8 border-white ">
        <Menu makeFormVisible={makeFormVisible} page="Post Page" />
        <MainPart userId={id} />
        <MobileMenu makeFormVisible={makeFormVisible} />
        <UserStuff />
        {isFormShown && (
          <div
            className="fixed top-0 left-0 w-full h-[100vh] flex items-center justify-center z-10 bg-black/60"
            onClick={makeFormInvisible}
          >
            <Form makeFormInvisible={makeFormInvisible} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetailsPage;
