'use client';
import { useRef, useEffect } from 'react';
import QrCreator from 'qr-creator';
import styles from './QrCode.module.scss';
import { generateVCard } from '@/components/utils/generateVCard';
import { useSelector } from 'react-redux';

export const QrCode = ({ link = '#', size = 250 }) => {
	const data = useSelector((state) => state.data);
	const vcard = generateVCard(data);
	const qrRef = useRef(null);

	useEffect(() => {
		if (qrRef.current) {
			qrRef.current.innerHTML = '';

			QrCreator.render(
				{
					text: vcard.toString(),
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

	return <div className={styles.QrCode} ref={qrRef}></div>;
};
