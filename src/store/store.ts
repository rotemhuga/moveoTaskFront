import { configureStore } from "@reduxjs/toolkit";
import codeSlice, { ICode } from "./slices/codeSlice";

export interface IRootState {
	codes: {
    titleValue: string;
		value: ICode[];
	currentRoom: ICode | null;
	}
}

export default configureStore({
	reducer: {
	  codes: codeSlice,
	},
  });
  