import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import { useState } from 'react';

const MapComp = (props) => {
	//console.log(props);

	const [center, setCenter] = useState({ lat: 20.5937, lng: 78.9629 });
	const [bounds, setBounds] = useState(new props.google.maps.LatLngBounds());

	const handleGetLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(userLocation);
		}
	};

	const userLocation = (location) => {
		setCenter({ lat: location.coords.latitude, lng: location.coords.longitude });
		let b = new props.google.maps.LatLngBounds();
		b.extend({ lat: location.coords.latitude, lng: location.coords.longitude });
		b.extend({ lat: 17.37174731189148, lng: 78.5208202389444 });
		setBounds(b);
	};

	const onMarkerDragged = (props, marker, e) => {
		//setCenter({ lat: e.latLng.lat(), lng: e.latLng.lng() });
	};
	const [showWindow, setShowWindow] = useState(false);
	const [activeMarker, setactiveMarker] = useState(null);

	const markerClicked = (props, marker, e) =>{
		console.log(activeMarker, marker);
		setactiveMarker(marker);
		setShowWindow(true)
	}

	const windowClosed = () =>{
		setactiveMarker(null);
		setShowWindow(false);
	}

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-lg-3'></div>
				<div className='col-lg-6 mt-4 text-center'>
					<h3>Google maps</h3>
					<button className='btn btn-primary mt-4' onClick={(e) => handleGetLocation()}>
						Get my location
					</button>
					<div className='map m-4'>
						<Map google={props.google} zoom={14} initialCenter={center} bounds={bounds}>
							<Marker
								title={'The marker`s title will appear as a tooltip.'}
								name={'SOMA'}
								position={center}
								draggable={true}
								onDragend={onMarkerDragged}
								onClick={markerClicked}
								>
								</Marker>

								<InfoWindow
								marker={activeMarker}
								visible={showWindow}
								onClick={windowClosed}>
									<div className="infowindow">
									<h1>Hderabad</h1>
									</div>
								</InfoWindow>
						</Map>
					</div>
				</div>
				<div className='col-lg-3'></div>
			</div>
		</div>
	);
};

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDQ-0yDs9LF6PLjsg6o_-BPy8INN6YCUks',
})(MapComp);
