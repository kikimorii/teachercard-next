'use client';

export const Button = ({
	styleClasses = '',
	handleClick,
	children,
	withIcon,
	onlyIcon,
	className,
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
		display: 'none',
		justifyContent: 'center',
		alignItems: 'center',
	};

	return (
		<button
			className={`${styleClasses} ${className}`}
			onClick={handleClick}
			style={withIcon ? withIconStyle : onlyIcon ? onlyIconStyle : {}}
			type='button'
		>
			{children}
		</button>
	);
};
