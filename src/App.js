import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from './components/profile/profile';

function App() {
  return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/profile' component={Profile} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
