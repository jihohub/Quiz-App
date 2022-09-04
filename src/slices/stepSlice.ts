import { createSlice } from "@reduxjs/toolkit";

export interface StepState {
  step: number;
}

const initialState: StepState = {
  step: 0
};

export const stepSlice = createSlice({
  name: "quizSlice",
  initialState,
  reducers: {
    getStep(state) {
      state.step;
    },
    clearStep(state) {
      state.step = 0;
    },
    nextStep(state) {
      state.step = state.step + 1;
    },
  },
});

export const { getStep, clearStep, nextStep } = stepSlice.actions;
export default stepSlice.reducer;
