import { Form } from 'antd';

import TextInput from '../inputs/TextInput';
import StatusInput from '../inputs/StatusInput';
import DateRangeInput from '../inputs/DateRangeInput';
import ButtonComponent from '../common/ButtonComponent';

const PatientFilterForm = ({ form, onFinish, onReset }) => {
	return (
		<Form
			form={form}
			onFinish={onFinish}
			layout='vertical'
			style={{
				padding: '24px',
				background: '#fff',
				borderRadius: '8px',
				boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
			}}
		>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(2, 1fr)',
					columnGap: '16px',
				}}
			>
				<TextInput
					name='firstName'
					label='First Name'
					placeholder='Enter first name'
				/>

				<TextInput
					name='lastName'
					label='Last Name'
					placeholder='Enter last name'
				/>

				<TextInput
					name='personalNumber'
					label='Personal Number'
					placeholder='Enter personal number'
				/>

				<StatusInput />

				<DateRangeInput />

				<Form.Item
					style={{
						marginBottom: 0,
						display: 'flex',
						justifyContent: 'flex-start',
						alignSelf: 'anchor-center',
						justifySelf: 'end',
					}}
				>
					<ButtonComponent
						type='primary'
						htmlType='submit'
						style={{ marginRight: '12px' }}
					>
						Search
					</ButtonComponent>
					<ButtonComponent onClick={onReset}>Reset</ButtonComponent>
				</Form.Item>
			</div>
		</Form>
	);
};

export default PatientFilterForm;
