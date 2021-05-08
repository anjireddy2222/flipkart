import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slider = ({ slides }) => {
	slides.map((slide) => console.log(slide));

	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-lg-12'>
					<div>
						<Slide easing='ease'>
							{slides.map((slide, i) => (
								<div className='each-slide' key={i}>
									<a href={slide.link}>
										<div style={{ backgroundImage: `url(${slide.imagePath})` }}></div>
									</a>
								</div>
							))}
						</Slide>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;
