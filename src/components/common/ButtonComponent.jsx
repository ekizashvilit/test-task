import { Button } from 'antd';

const ButtonComponent = ({
	type,
	danger,
	onClick,
	children,
	size = 'default',
	...rest
}) => {
	return (
		<Button
			type={type}
			danger={danger}
			onClick={onClick}
			size={size}
			{...rest}
			style={{
				padding: '0 24px',
				...rest.style,
			}}
		>
			{children}
		</Button>
	);
};

export default ButtonComponent;
