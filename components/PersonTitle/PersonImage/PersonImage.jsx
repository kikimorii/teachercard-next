import Image from 'next/image';
import styles from './PersonImage.module.scss';
import { QrCodeIcon } from '@/components/QrCode/QrCodeIcon';
import { Button } from '@/components/Button/Button';
import { QrCode } from '@/components/QrCode/QrCode';
import { useDispatch, useSelector } from 'react-redux';
import { switchMode } from '@/app/store/configSlice';

export const PersonImage = ({ link }) => {
	const { altMode } = useSelector((state) => state.config);
	const dispatch = useDispatch();

	return (
		<>
			{altMode ? (
				<>
					<QrCode size={275} />
				</>
			) : (
				<>
					<div className={styles.personImageContainer}>
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
					</div>
				</>
			)}
		</>
	);
};
