import { StoryType } from "../types";
import AvatarImage from "./UI/AvatarImage";

interface Props {
  story: StoryType;
}

const StoryHeader = ({ story }) => {
  console.log(story);
  return (
    <div className="flex justify-start items-center gap-2">
      <AvatarImage w="user" currentUser={story.creator} />
      <div>{story.creator.name || "New User"}</div>
      <div>{story.createdAt}</div>
    </div>
  );
};
export default StoryHeader;
