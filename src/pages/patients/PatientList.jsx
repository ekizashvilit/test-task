import dayjs from 'dayjs';
import { Form } from 'antd';
import { useEffect } from 'react';

import PatientFilterForm from '../../components/forms/PatientFilterForm';

const PatientList = () => {
	const [form] = Form.useForm();

	useEffect(() => {
		const savedFormData = JSON.parse(
			localStorage.getItem('patientFilterFormData')
		);
		if (savedFormData) {
			if (savedFormData.dateRange) {
				savedFormData.dateRange = [
					dayjs(savedFormData.dateRange[0]),
					dayjs(savedFormData.dateRange[1]),
				];
			}
			form.setFieldsValue(savedFormData);
		}
	}, [form]);

	const onFinish = (values) => {
		console.log('Form values:', values);
		localStorage.setItem('patientFilterFormData', JSON.stringify(values));
	};

	const onReset = () => {
		form.resetFields();
		localStorage.removeItem('patientFilterFormData');
	};

	return (
		<>
			<PatientFilterForm form={form} onFinish={onFinish} onReset={onReset} />
		</>
	);
};

export default PatientList;
