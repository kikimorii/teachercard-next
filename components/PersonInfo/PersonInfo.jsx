'use client';
import { PersonShare, PersonInfoList } from '@/components';
import styles from './PersonInfo.module.scss';

export const PersonInfo = () => {
	return (
		<div className={styles.wrapper}>
			<PersonShare />
			<PersonInfoList />
		</div>
	);
};
