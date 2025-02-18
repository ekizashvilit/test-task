import dayjs from 'dayjs';
import { Form, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const DateRangeInput = () => {
	return (
		<Form.Item name='dateRange' label='Date Range'>
			<RangePicker
				format='DD-MM-YYYY'
				size='large'
				defaultPickerValue={[
					dayjs('29-10-2020', 'DD-MM-YYYY'),
					dayjs('29-10-2020', 'DD-MM-YYYY'),
				]}
				disabledDate={(current) => {
					return (
						current < dayjs('29-10-2020', 'DD-MM-YYYY').startOf('day') ||
						current > dayjs('29-11-2022', 'DD-MM-YYYY').endOf('day')
					);
				}}
				initialValues={[
					dayjs('29-10-2020', 'DD-MM-YYYY'),
					dayjs('29-11-2022', 'DD-MM-YYYY'),
				]}
			/>
		</Form.Item>
	);
};

export default DateRangeInput;
