import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
	const navigate = useNavigate();

	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
			<div className='text-center px-4'>
				<h1 className='text-4xl font-bold text-red-500 mb-4'>
					Unauthorized Access
				</h1>
				<p className='text-gray-600 mb-8 text-lg'>
					You don't have permission to access this page.
				</p>
				<Button type='primary' onClick={() => navigate('/')} size='large'>
					Go Back
				</Button>
			</div>
		</div>
	);
};

export default Unauthorized;
