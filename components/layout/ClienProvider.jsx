'use client';
import { Provider } from 'react-redux';
import { makeStore } from '@/app/store/store';
import { setData } from '@/app/store/dataSlice';

export const ClientProvider = ({ data, children }) => {
	const store = makeStore();
	store.dispatch(setData(data));
	return <Provider store={store}>{children}</Provider>;
};
