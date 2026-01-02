import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
import configReducer from './configSlice';

export const makeStore = () =>
	configureStore({
		reducer: {
			data: dataReducer,
			config: configReducer,
		},
	});
