import { DateTime } from "luxon";
import { StoryType } from "../types";
import AvatarImage from "./UI/AvatarImage";

interface Props {
  userAvatar?: string;
  userName: string;
  createdAt: string;
}

const StoryHeader = ({ userName, userAvatar, createdAt }) => {
  const countTime = () => {
    const date1 = DateTime.now();
    const date2 = DateTime.fromISO(createdAt);
    const diff = date1.diff(date2, [
      "years",
      "months",
      "days",
      "hours",
      "minutes",
      "seconds",
    ]);
    const time = diff.toObject();
    if (time.hours && time.hours > 0) return `${time.hours}h`;
    if (time.minutes && time.minutes > 0) return `${Math.round(time.minutes)}m`;
    if (time.seconds) return `${Math.round(time.seconds)}s`;
  };

  const time = countTime();

  return (
    <div className="flex mx-2 justify-start items-center gap-2">
      <AvatarImage
        w="user"
        currentUser={{ name: userName, picture: userAvatar }}
      />
      <div className="font-bold text-white">{userName || "New User"}</div>
      <div className="text-[#ffffffb2] text-black">{time}</div>
    </div>
  );
};
export default StoryHeader;
