import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./slices/quizSlice";
import stepReducer from "./slices/stepSlice";
import timeReducer from "./slices/timeSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    step: stepReducer,
    time: timeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
