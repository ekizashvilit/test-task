import { Form, Input } from 'antd';

const TextInput = ({ name, label, placeholder, size = 'large' }) => {
	return (
		<Form.Item name={name} label={label}>
			<Input placeholder={placeholder} size={size} />
		</Form.Item>
	);
};

export default TextInput;
