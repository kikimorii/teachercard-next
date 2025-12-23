'use client';

import { useSelector } from 'react-redux';
import { PersonImage, ContactLinks } from '@/components';
import styles from './PersonTitle.module.scss';

export const PersonTitle = () => {
	const { name, photo } = useSelector((state) => state.data);
	const { altMode } = useSelector((state) => state.config);

	return (
		<div className={styles.personTitleWrapper}>
			<PersonImage link={photo} />
			<h5>{`${name.lastname} ${name.firstname} ${name.additional}`}</h5>
			{altMode ? <></> : <ContactLinks />}
		</div>
	);
};
