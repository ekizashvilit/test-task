import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	TeamOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

import { logout } from '../../store/slices/authSlice';
import ButtonComponent from '../common/ButtonComponent';

const { Header, Sider, Content } = Layout;

const PatientListLayout = () => {
	const [collapsed, setCollapsed] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	const handleLogout = () => {
		dispatch(logout());
		navigate('/login');
	};

	return (
		<Layout>
			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
				style={{ height: '100vh' }}
			>
				<div className='demo-logo-vertical' />
				<Menu
					style={{ paddingTop: '10px' }}
					theme='dark'
					mode='inline'
					defaultSelectedKeys={['1']}
					items={[
						{
							key: '1',
							icon: <TeamOutlined />,
							label: <Link to='/patients'>Patients</Link>,
						},
					]}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
					}}
				>
					<div className='flex justify-between items-center h-full'>
						<Button
							type='text'
							icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
							onClick={() => setCollapsed(!collapsed)}
							style={{
								fontSize: '16px',
								width: 64,
								height: 64,
							}}
						/>
						<div className='flex items-center mx-5'>
							<span className='mr-4 capitalize'>Hello, {user?.username}</span>
							<ButtonComponent
								size='small'
								type='primary'
								danger
								onClick={handleLogout}
							>
								Logout
							</ButtonComponent>
						</div>
					</div>
				</Header>
				<Content
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
					}}
				>
					<div className='max-w-7xl mx-auto'>
						<Outlet />
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default PatientListLayout;
