import { Navigate, Route, Routes } from 'react-router-dom';

import Login from './pages/auth/Login';
import Unauthorized from './pages/Unauthorized';
import AddPatient from './pages/patients/AddPatient';
import PatientList from './pages/patients/PatientList';
import EditPatient from './pages/patients/EditPatient';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import PatientListLayout from './components/layout/PatientListLayout';

function App() {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/unauthorized' element={<Unauthorized />} />

			{/* Protected routes */}
			<Route
				path='/'
				element={
					<ProtectedRoute>
						<PatientListLayout />
					</ProtectedRoute>
				}
			>
				<Route index element={<Navigate to='patients' />} />

				<Route path='patients'>
					<Route index element={<PatientList />} />
					<Route
						path='add'
						element={
							<ProtectedRoute allowedRoles={['admin']}>
								<AddPatient />
							</ProtectedRoute>
						}
					/>
					<Route
						path=':id/edit'
						element={
							<ProtectedRoute allowedRoles={['admin']}>
								<EditPatient />
							</ProtectedRoute>
						}
					/>
				</Route>
			</Route>
		</Routes>
	);

	// ---ErrorBoundary test---
	// throw new Error('Test error!');
}

export default App;
