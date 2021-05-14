import { useState } from "react";
import { getSliderImagesApi } from "../../apis/getSliderImages";
import Nav from "../Nav/Nav";
import Categories from "./Categories";
import Slider from './Slider';
import cookie from 'react-cookies';

const Home = () => {
	const [sliderImages, setSliderImages] = useState(getSliderImagesApi());
	//var d = new Date();
	// d.setTime(d.getTime() + 10 * 24 * 60 * 60 * 1000);
	// cookie.save('uid', 10, { path: '/', expires: d });

	return (
		<>
			<Nav showimagenav={false} showtextnav={true} />
			<br />
			<Slider slides={sliderImages} />
			<Categories />
		</>
	);
};

export default Home;
