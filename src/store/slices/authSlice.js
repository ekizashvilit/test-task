import { createSlice } from '@reduxjs/toolkit';

const USERS = [
	{ username: 'admin', password: 'admin123', role: 'admin' },
	{ username: 'doctor', password: 'doctor123', role: 'doctor' },
];

const initialState = {
	user: JSON.parse(localStorage.getItem('user')) || null,
	isLoading: false,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginStart: (state) => {
			state.isLoading = true;
			state.error = null;
		},
		loginSuccess: (state, action) => {
			state.isLoading = false;
			state.user = action.payload;
			state.error = null;
			localStorage.setItem('user', JSON.stringify(action.payload));
		},
		loginFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		logout: (state) => {
			state.user = null;
			state.error = null;
			localStorage.removeItem('user');
		},
	},
});

export const {
	loginStart,
	loginSuccess,
	loginFailure,
	logout,
} = authSlice.actions;

export const loginUser = (username, password) => (dispatch) => {
	dispatch(loginStart());

	const user = USERS.find(
		(u) => u.username === username && u.password === password
	);

	if (user) {
		dispatch(loginSuccess({ username: user.username, role: user.role }));
		return true;
	} else {
		dispatch(loginFailure('Invalid username or password'));
		return false;
	}
};

export default authSlice.reducer;
