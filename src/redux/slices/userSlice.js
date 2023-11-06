import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAuth = createAsyncThunk(
	"@@auth/fetchAuth",
	async (params) => {
	
		const { data } = await axios.post(
			"http://localhost:7000/user/sign-in",
			params
		);

		return data;
	}
);

export const fetchAuthMe = createAsyncThunk("@@auth/fetchAuthMe", async () => {
	const { data } = await axios.get("http://localhost:7000/user/check-auth", {
		headers: {
			Authorization: window.localStorage.getItem("token"),
		},
	});
	return data;
});

const initialState = {
	userData: null,
	status: "loading",
};

const userSlice = createSlice({
	name: "@@auth",
	initialState,
	reducers: {
		signout: (state) => {
			state.status = "received";
			state.userData = null;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(fetchAuth.pending, (state) => {
				state.userData = null;
				state.status = "loading";
			})
			.addCase(fetchAuth.rejected, (state) => {
				state.userData = null;
				state.status = "rejected";
			})
			.addCase(fetchAuth.fulfilled, (state, action) => {
				state.userData = action.payload;
				state.status = "received";
			})
			.addCase(fetchAuthMe.pending, (state) => {
				state.userData = null;
				state.status = "loading";
			})
			.addCase(fetchAuthMe.rejected, (state) => {
				state.userData = null;
				state.status = "rejected";
			})
			.addCase(fetchAuthMe.fulfilled, (state, action) => {
				state.userData = action.payload;
				state.status = "received";
			});
	},
});

export const { signout } = userSlice.actions;
export const selectIsAuth = (state) => Boolean(state.user.userData);
export const selectUserData = (state) => state.user.userData;
export default userSlice.reducer;
