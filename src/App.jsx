// App.jsx
import { Navigate, Route, Routes } from 'react-router-dom'; // Changed from 'react-router'
import Login from './pages/auth/Login';
import PatientListLayout from './components/layout/PatientListLayout';
import PatientList from './pages/patients/PatientList';
import AddPatient from './pages/patients/AddPatient';
import EditPatient from './pages/patients/EditPatient';

function App() {
	return (
		<Routes>
			{/* login */}
			<Route path='/login' element={<Login />} />

			{/* patients */}
			<Route path='/' element={<PatientListLayout />}>
				<Route index element={<Navigate to='patients' />} />

				<Route path='patients'>
					<Route index element={<PatientList />} />
					<Route path='add' element={<AddPatient />} />
					<Route path=':id/edit' element={<EditPatient />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
