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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
