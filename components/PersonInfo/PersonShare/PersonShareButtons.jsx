import { Button } from '@/components/Button/Button';
import styles from './PersonShare.module.scss';
import { handleClickDownload } from '@/components/utils/generateVCard';
import { handleClickShare } from '@/components/utils/modal';
import { useSelector } from 'react-redux';

export const PersonShareButtons = () => {
	const data = useSelector((state) => state.data);

	return (
		<div className={styles.shareButtons}>
			<Button
				styleClasses='btn-text primary filled'
				handleClick={() => handleClickShare()}
				withIcon={true}
			>
				<i className='bi bi-share'></i> Поделиться
			</Button>
			<Button
				styleClasses='btn-text download filled'
				handleClick={() => handleClickDownload(data)}
				withIcon={true}
			>
				<i className='bi bi-download'></i> Скачать
			</Button>
		</div>
	);
};
