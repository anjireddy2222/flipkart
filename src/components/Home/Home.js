import { useState } from "react";
import { getSliderImagesApi } from "../../apis/getSliderImages";
import Nav from "../Nav/Nav";
import Categories from "./Categories";
import Slider from './Slider';
const Home = () => {

  const [sliderImages, setSliderImages] = useState(getSliderImagesApi());

  
  return (
		<>
			<Nav showimagenav={false} showtextnav={true} />
			<br />
			<Slider  slides={sliderImages} />
      <Categories />
		</>
	);
};

export default Home;
