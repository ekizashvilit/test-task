import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Form, Input, Button, Alert } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

import { loginUser } from '../../store/slices/authSlice';

const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

	const { error, isLoading, user } = useSelector((state) => state.auth);

	useEffect(() => {
		if (user) {
			const from = location.state?.from?.pathname || '/patients';
			navigate(from, { replace: true });
		}
	}, [user, navigate, location]);

	const onFinish = async (values) => {
		await dispatch(loginUser(values.username, values.password));
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-50'>
			<Card className='w-96 shadow-md'>
				<h2 className='text-2xl font-bold text-center mb-6'>Login</h2>
				{error && (
					<Alert
						message={error}
						type='error'
						className='mb-4'
						showIcon
						closable
					/>
				)}
				<Form
					name='login'
					onFinish={onFinish}
					layout='vertical'
					initialValues={{ remember: true }}
				>
					<Form.Item
						label='Username'
						name='username'
						rules={[{ required: true, message: 'Please input your username!' }]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label='Password'
						name='password'
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item>
						<Button
							type='primary'
							htmlType='submit'
							className='w-full'
							loading={isLoading}
						>
							Sign in
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
};

export default Login;
