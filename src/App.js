import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Routers from './Routers';
import { CookiesProvider } from 'react-cookie';

function App() {
	return (
		<CookiesProvider>
			<BrowserRouter>
				<Routers />
			</BrowserRouter>
		</CookiesProvider>
	);
}

export default App;
