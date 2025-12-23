import Image from 'next/image';
import styles from './PersonImage.module.scss';
import { QrCodeIcon, Button, QrCode } from '@/components';
import { useDispatch, useSelector } from 'react-redux';
import { switchMode } from '@/app/store/configSlice';

export const PersonImage = ({ link }) => {
	const { altMode } = useSelector((state) => state.config);
	const dispatch = useDispatch();

	return (
		<div className={styles.personImageContainer}>
			{altMode ? (
				<>
					<QrCode />
				</>
			) : (
				<>
					<Image
						className={styles.personImage}
						src={link}
						alt={'teacherAvatar'}
						width={228}
						height={228}
					/>
					<Button
						className={styles.personImageButton}
						onlyIcon={true}
						handleClick={() => dispatch(switchMode())}
					>
						<QrCodeIcon />
					</Button>
				</>
			)}
		</div>
	);
};
