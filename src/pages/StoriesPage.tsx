import { StoryType } from "../types";
import { Story } from "react-insta-stories/dist/interfaces";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import Stories from "stories-react";
import "stories-react/dist/index.css";
import StoryHeader from "../components/StoryHeader";

const StoriesPage: React.FC = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const storiesById = useAppSelector((state) =>
    state.stories.stories?.find((story) => story.userId === id)
  );

  const stories =
    id === "current" ? currentUser.stories : storiesById?.stories || [];

  const userName =
    id === "current" ? currentUser.name : storiesById?.userName || "";

  const userAvatar =
    id === "current" ? currentUser.picture : storiesById?.userAvatar || "";

  const listOfStories = stories.map((story) => ({
    type: "image",
    url: story.post,
    header: (
      <StoryHeader
        userName={userName}
        userAvatar={userAvatar}
        createdAt={story.createdAt}
      />
    ),
    duration: 5000,
  }));

  return (
    <div
      onClick={(e) => {
        navigate("/");
      }}
      className="w-screen overflow-hidden h-screen bg-gradient-to-tr from-pink-200 to-violet-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-sm max-w-md h-full mx-auto"
      >
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
