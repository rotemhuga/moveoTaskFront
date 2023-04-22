import { configureStore } from "@reduxjs/toolkit";
import codeSlice, { ICode } from "./slices/codeSlice";

export interface IRootState {
	codes: {
    titleValue: string;
		value: ICode[];
	}
}

export default configureStore({
	reducer: {
	  codes: codeSlice,
	},
  });
  