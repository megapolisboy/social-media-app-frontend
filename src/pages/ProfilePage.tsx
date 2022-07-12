import { useState } from "react";
import Form from "../components/Form";
import MainPart from "../components/ProfileComponents/MainPart";
import Menu from "../components/Menu";
import UserStuff from "../components/UserStuff";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const [isFormShown, setIsFormShown] = useState(false);
  const { id } = useParams();

  const makeFormVisible = () => {
    setIsFormShown(true);
  };

  const makeFormInvisible = () => {
    setIsFormShown(false);
  };

  return (
    <div className="p-4 h-screen bg-gradient-to-r from-purple-100 to-purple-300">
      <div className="flex flex-col md:flex-row h-full gap-3 rounded-3xl px-3 py-2 bg-gradient-to-r from-slate-100 to-purple-200 border-8 border-white ">
        <Menu makeFormVisible={makeFormVisible} page="Profile" />
        <MainPart userId={id} />
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
export default ProfilePage;
