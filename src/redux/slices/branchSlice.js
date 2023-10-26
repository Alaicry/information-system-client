import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBranches = createAsyncThunk(
	"@@branch/getBranches",
	async () => {
		const { data } = await axios.get("http://localhost:7000/branch/all");
		return data;
	}
);

const initialState = {
	branchList: [],
	status: "loading",
};

const branchSlice = createSlice({
	name: "@@branch",
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(getBranches.pending, (state) => {
				state.branchList = null;
				state.status = "loading";
			})
			.addCase(getBranches.rejected, (state) => {
				state.branchList = null;
				state.status = "rejected";
			})
			.addCase(getBranches.fulfilled, (state, action) => {
				state.branchList = action.payload;
				state.status = "fulfilled";
			}),
});

export const {} = branchSlice.actions;

export default branchSlice.reducer;
