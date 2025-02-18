import { Form, Select } from 'antd';

const { Option } = Select;

const StatusInput = () => {
	return (
		<Form.Item name='status' label='Status'>
			<Select
				placeholder='Select status'
				size='large'
				style={{ width: '100%', borderRadius: '6px' }}
			>
				<Option value='active'>Active</Option>
				<Option value='inactive'>Inactive</Option>
				<Option value='pending'>Pending</Option>
			</Select>
		</Form.Item>
	);
};

export default StatusInput;
