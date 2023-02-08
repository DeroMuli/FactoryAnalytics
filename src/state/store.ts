import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./example";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
