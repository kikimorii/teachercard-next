'use client';

import { useSelector } from 'react-redux';

export const Main = () => {
	const test = useSelector((state) => state.data);
	console.log(test);
	return <pre>{JSON.stringify(test, null, 2)}</pre>;
};
