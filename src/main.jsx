import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import './index.css';
import App from './App.jsx';
import { store } from './store';
import ErrorFallback from './components/error/ErrorFallback.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<ErrorBoundary
				FallbackComponent={ErrorFallback}
				onReset={() => window.location.reload()}
			>
				<App />
			</ErrorBoundary>
		</BrowserRouter>
	</Provider>
);
