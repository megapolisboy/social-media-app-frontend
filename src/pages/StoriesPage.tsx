import { StoryType } from "../types";
import { Story } from "react-insta-stories/dist/interfaces";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import Stories from "stories-react";
import "stories-react/dist/index.css";

const StoriesPage: React.FC = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const currentUser = useAppSelector((state) => state.user.currentUser);
  //   const stories = useAppSelector(
  //     (state) => state.user.currentlyOpenStoriesUser
  //   );
  const stories = currentUser.stories;

  const listOfStories = stories.map((story) => ({
    type: "image",
    url: story.post,
    duration: 5000,
  }));
  return (
    <div className="w-screen h-screen bg-gradient-to-tr from-pink-200 to-violet-300">
      <div className="w-sm max-w-md h-full mx-auto">
        <Stories
          stories={listOfStories}
          width="100%"
          height="100%"
          onAllStoriesEnd={() => navigate("/")}
        />
      </div>
    </div>
  );
};
export default StoriesPage;
