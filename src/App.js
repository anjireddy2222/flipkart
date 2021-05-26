import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from './components/profile/profile';
import Cart from './components/shopping/cart';
import ProductDetails from './components/shopping/ProductDetails';

function App() {
  return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/profile' component={Profile} />
				<Route exact path='/cart' component={Cart} />
				<Route exact path='/product-details' component={ProductDetails} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
