import { configureStore } from "@reduxjs/toolkit";
import stepper from "./stepper";

const store = configureStore({
  reducer: {
    stepper,
  },
});

export default store;
