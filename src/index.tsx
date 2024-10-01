import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import { Testpage } from './pages/Testpage/index.js';
import store from './store'
import { Provider } from 'react-redux'
import './style.css';

export function App() {
	return (
		<Provider store={store}>
			<LocationProvider>
				<main>
					<Router>
						<Route path="/" component={Testpage} />
						<Route path="/testpage" component={Home} />
						<Route default component={NotFound} />
					</Router>
				</main>
			</LocationProvider>
		</Provider>
	);
}

render(<App />, document.getElementById('app'));
