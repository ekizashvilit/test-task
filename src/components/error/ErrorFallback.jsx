import { Button, Typography, Result } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

const ErrorFallback = ({ error, resetErrorBoundary }) => {
	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-50'>
			<Result
				status='error'
				icon={<CloseCircleOutlined className='text-red-500 text-4xl' />}
				title={<Title level={3}>Something went wrong</Title>}
				subTitle={
					<div className='mt-4'>
						<Text type='secondary'>Error details:</Text>
						<pre className='mt-2 p-4 bg-gray-100 rounded border border-gray-200 text-sm overflow-auto max-h-32'>
							{error.message}
						</pre>
					</div>
				}
				extra={[
					<Button
						type='primary'
						onClick={resetErrorBoundary}
						size='large'
						key='tryAgain'
					>
						Try Again
					</Button>,
				]}
			/>
		</div>
	);
};

export default ErrorFallback;
