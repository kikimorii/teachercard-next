'use client';
import {
	PersonShare,
	PersonInfoList,
	PersonShareButtons,
	Button,
} from '@/components';
import styles from './PersonInfo.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { switchMode } from '@/app/store/configSlice';

export const PersonInfo = () => {
	const { altMode } = useSelector((state) => state.config);
	const dispatch = useDispatch();
	return (
		<>
			{altMode ? (
				<div className={styles.wrapperAltMode}>
					<PersonShareButtons />
					<Button
						styleClasses='btn-text primary'
						handleClick={() => dispatch(switchMode())}
					>
						Обратно к визитке
					</Button>
				</div>
			) : (
				<div className={styles.wrapper}>
					<PersonShare />
					<PersonInfoList />
				</div>
			)}
		</>
	);
};
