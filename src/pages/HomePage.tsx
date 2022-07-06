import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Form from "../components/Form";
import MainPart from "../components/HomePageComponents/MainPart";
import Menu from "../components/Menu";
import Posts from "../components/PostStuff/Posts";

const HomePage = () => {
  const [menuActive, setMenuActive] = useState(false);
  const token = useAppSelector((state) => state.user.token);
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isFormShown, setIsFormShown] = useState(false);

  const makeFormVisible = () => {
    setIsFormShown(true);
  };

  const makeFormInvisible = () => {
    setIsFormShown(false);
  };
  return (
    <div className="p-4 h-screen bg-gradient-to-r from-purple-100 to-purple-300">
      <div className="flex h-full gap-3 rounded-3xl px-3 py-2 bg-gradient-to-r from-slate-100 to-purple-200 border-8 border-white ">
        <Menu makeFormVisible={makeFormVisible} page="Home" />
        <MainPart />
        <div className="w-96 bg-inherit border-l-2 border-white">UserStuff</div>
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
export default HomePage;
