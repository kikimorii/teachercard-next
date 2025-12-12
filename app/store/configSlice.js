import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
	name: 'config',
	initialState: {
		altMode: false,
	},
	reducers: {
		switchMode: (state) => (state.altMode = !state.altMode),
	},
});

export const { switchMode } = configSlice.actions;

export default configSlice.reducer;
