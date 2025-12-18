'use client';
import { useRef, useEffect } from 'react';
import QrCreator from 'qr-creator';

export const QrCode = ({ link = '#', size = 250 }) => {
	const qrRef = useRef(null);

	useEffect(() => {
		if (qrRef.current) {
			qrRef.current.innerHTML = '';

			QrCreator.render(
				{
					text: link,
					radius: 0.5,
					ecLevel: 'H',
					fill: '#005aaa',
					background: null,
					size: size,
				},
				qrRef.current,
			);
		}
	}, [link]);

	return <div ref={qrRef}></div>;
};
