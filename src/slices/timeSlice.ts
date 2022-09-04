import { createSlice } from "@reduxjs/toolkit";

export interface TimeState {
  start: number | null;
  finish: number | null;
  diff: number | null;
}

const initialState: TimeState = {
  start: null,
  finish: null,
  diff: null
};

export const timeSlice = createSlice({
  name: "timeSlice",
  initialState,
  reducers: {
    setStart(state) {
      state.start = Date.now();
    },
    setFinish(state) {
      state.finish = Date.now();
    },
    getDiff(state) {
      state.diff = (state.start && state.finish) && state.finish - state.start;
    },
    clearTime(state) {
      state.start = null;
      state.finish = null;
    },
  },
});

export const { setStart, setFinish, clearTime, getDiff } = timeSlice.actions;
export default timeSlice.reducer;
