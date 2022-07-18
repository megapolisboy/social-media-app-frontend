import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import {
  CommentType,
  PostType,
  ShortPostType,
  StoryType,
  UserWithStoriesType,
} from "../types";

interface StoriesState {
  stories: UserWithStoriesType[];
}

const initialState: StoriesState = {
  stories: [],
};

export const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    fetchStories: (state) => {
      console.log("fetch!");
    },

    setStories: (state, action: PayloadAction<UserWithStoriesType[]>) => {
      state.stories = action.payload;
    },
  },
});

export const { fetchStories, setStories } = storiesSlice.actions;
export default storiesSlice.reducer;
