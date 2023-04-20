import { configureStore } from "@reduxjs/toolkit";
import codeSlice, { ICode } from "./slices/codeSlice";

export interface IRootState {
	codes: {
		value: ICode[];
	}
}

export default configureStore({
	reducer: {
	  codes: codeSlice,
	},
  });
  