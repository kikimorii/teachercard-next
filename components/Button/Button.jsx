'use client';

export const Button = ({
	styleClasses,
	handleClick,
	children,
	withIcon,
	onlyIcon,
}) => {
	const withIconStyle = {
		display: 'flex',
		alignItems: 'center',
		gap: '12px',
	};

	const onlyIconStyle = {
		backgroundColor: '#FFFFFF',
		borderRadius: '6px',
		padding: '4px',
	};

	return (
		<button
			className={styleClasses}
			onClick={handleClick}
			style={withIcon ? withIconStyle : onlyIcon ? onlyIconStyle : {}}
			type='button'
		>
			{children}
		</button>
	);
};
