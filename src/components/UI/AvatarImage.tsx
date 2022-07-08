import { useAppSelector } from "../../app/hooks";
import { UserType } from "../../types";

interface Props {
  w: number;
  currentUser: UserType;
}

const AvatarImage: React.FC<Props> = ({ w, currentUser }) => {
  return (
    <>
      {!currentUser.picture && (
        <button
          className={`w-${w} h-${w} flex justify-center items-center cursor-pointer bg-purple-700 text-xl text-white rounded-full`}
        >
          {currentUser.name[0].toUpperCase()}
        </button>
      )}
      {currentUser.picture && (
        <button
          className={`w-${w} h-${w} cursor-pointer bg-purple-700 text-xl text-white rounded-full text-center`}
        >
          <img
            className="rounded-full border-none"
            src={currentUser.picture}
            alt=""
          />
        </button>
      )}
    </>
  );
};
export default AvatarImage;
