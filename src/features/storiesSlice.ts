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
    setDefault: (state) => initialState,

    fetchStories: (state) => {
      console.log("fetch!");
    },

    setStories: (state, action: PayloadAction<UserWithStoriesType[]>) => {
      state.stories = action.payload;
    },
  },
});

export const { setDefault, fetchStories, setStories } = storiesSlice.actions;
export default storiesSlice.reducer;
