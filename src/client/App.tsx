import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllChirps from './AllChirps';
import SingleChirp from './SingleChirp';


export interface AppProps { };

const App: React.FC<AppProps> = (props) => {

	return (
		<>
		<Router>
			<Switch>
				<Route exact path="/" component={AllChirps} />
				<Route path="/:id" component={SingleChirp} />
			</Switch>
		</Router>
		</>
	)
}

export default App;