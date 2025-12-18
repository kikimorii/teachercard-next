'use client';
import { PersonShare, PersonInfoList } from '@/components';
const styles = {
	backgroundColor: '#FFFFFF',
	borderRadius: '20px',
	padding: '24px',
};

export const PersonInfo = () => {
	return (
		<div style={styles}>
			<PersonShare />
			<PersonInfoList />
		</div>
	);
};
