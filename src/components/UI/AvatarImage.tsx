import { useAppSelector } from "../../app/hooks";
import { UserType } from "../../types";

interface User {
  picture?: string;
  name: string;
}

interface Props {
  w: "user" | "profile";
  currentUser?: User;
}

const AvatarImage: React.FC<Props> = ({ w, currentUser }) => {
  return (
    <>
      {!currentUser?.picture && (
        <div
          className={
            (w === "profile" ? "w-16 h-16 " : "w-12 h-12 ") +
            "object-cover flex items-center justify-center cursor-pointer bg-purple-700 text-xl text-white rounded-full"
          }
        >
          <span>{currentUser?.name?.[0].toUpperCase()}</span>
        </div>
      )}
      {currentUser?.picture && (
        <button
          className={
            (w === "profile" ? "w-16 h-16 " : "w-12 h-12 ") +
            "cursor-pointer text-xl text-white rounded-full text-center"
          }
        >
          <img
            className="rounded-full border-none"
            src={currentUser?.picture}
            alt=""
          />
        </button>
      )}
    </>
  );
};
export default AvatarImage;
