import { createSlice } from "@reduxjs/toolkit";
import { sendGAEvent } from "@next/third-parties/google";
import type { PayloadAction } from "@reduxjs/toolkit";

import initialState from "./initialState";
import { REDUCER_NAME } from "./constants";
import { Step } from "./types";

const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    changeActiveStep: (state, action: PayloadAction<number>) => {
      state.activeStep = action.payload;
      sendGAEvent({
        event: "click_button",
        label:
          state.activeStep < action.payload ? "next_button" : "prev_button",
        value: action.payload,
      });
    },
    changeValue: (state, action: PayloadAction<Step>) => {
      state[action.payload.step] = action.payload.value;
      sendGAEvent({
        event: "click_option",
        label: action.payload.step,
        value: action.payload.value,
      });
    },
    changeWorkType: (state, action: PayloadAction<string>) => {
      const allWorks = state.workType;
      const work = action.payload;

      state.workType = allWorks.includes(work)
        ? allWorks.filter((item) => item !== work)
        : [...allWorks, work];
    },
    resetSteps: (state) => Object.assign(state, initialState),
  },
});

export default slice;
