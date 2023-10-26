import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import branchSlice from "./slices/branchSlice";

const rootReducer = combineReducers({
	user: userSlice,
	branch: branchSlice,
});

export default rootReducer;
