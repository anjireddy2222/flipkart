import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from './components/profile/profile';
import Cart from './components/shopping/cart';
import ProductDetails from './components/shopping/ProductDetails';
import Auth from './components/Auth/Auth';
import EmailValidator from './components/Home/EmailValidator';
import Notify from './components/Notifications/Notify';
import Post from './components/Post/Post';
import MapComp from './components/Map/Map';

function App() {
  return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/profile' component={Profile} />
				<Route exact path='/cart' component={Cart} />
				<Route exact path='/product-details' component={ProductDetails} />
				<Route exact path='/auth' component={Auth} />
				<Route exact path='/validate' component={EmailValidator} />
				<Route exact path='/notify' component={Notify} />
				<Route exact path='/post' component={Post} />
				<Route exact path='/map' component={MapComp} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
