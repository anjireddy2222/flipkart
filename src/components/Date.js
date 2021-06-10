import { useState } from 'react';
import Nav from './Nav/Nav';
import date from 'date-and-time';
import spacetime from 'spacetime';

const DateTime = () => {
	const [now, setNow] = useState(new Date());
	const [datetime, setdatetime] = useState('');

	const [epoch, setepoch] = useState(0);
	const [timezone, settimezone] = useState('');
	const [userTZ, setuserTZ] = useState('');
	const [userDatetime, setuserdatetime] = useState('');

	const changedateformt = () => {
		let d = 'default format is ' + now.toString() + '\n';
		d = d + date.format(now, 'YYYY') + '\n'; // only year - four digit
		d = d + date.format(now, 'YY') + '\n'; // 2 digit year
		d = d + date.format(now, 'MMMM') + '\n'; // full month name
		d = d + date.format(now, 'MMM') + '\n'; // 3 letter month name
		d = d + date.format(now, 'MM') + '\n';
		d = d + date.format(now, 'dddd') + '\n'; // full day name
		d = d + date.format(now, 'D') + '\n';
		d = d + date.format(now, 'D-MM-YYYY hh:mm A') + '\n';
		d = d + now.toUTCString();
		setdatetime(d);
	};

	const setTimestamp = () => {
		let d = spacetime.now('UTC');
		console.log(d);
		setepoch(d.epoch);
		settimezone(d.tz);
	};

	const showuserTimezone = () => {
		let d = spacetime.now();
		setuserTZ(d.tz);
		let userdt = spacetime(epoch, 'utc').goto(d.tz);
		setuserdatetime(userdt.format('{year}-{date-pad}-{month-pad}  {time}'));
	};

	return (
		<div>
			<Nav showimagenav={false} showtextnav='true' />
			<div className='container'>
				<div className='row'>
					<div className='col-lg-3'></div>
					<div className='col-lg-6 mt-3'>
						<center>
							<h3>Date and time</h3>
						</center>
						<button type='button' className='btn btn-primary' onClick={(e) => changedateformt()}>
							Change date format
						</button>
						<div className='mt-3'>{datetime}</div>
					</div>
					<div className='col-lg-3'></div>
					<div className='col-lg-3'></div>
					<div className='col-lg-6'>
						<button className='btn btn-primary' onClick={(e) => setTimestamp()}>
							Get UTC
						</button>
						<br />
						unix timestamp is : {epoch} <br />
						user timezone is: {timezone} <br />
					</div>
					<div className='col-lg-3'></div>
					<div className='col-lg-3'></div>
					<div className='col-lg-6'>
						<button className='btn btn-primary' onClick={(e) => showuserTimezone()}>
							COnveert to user time zone
						</button>
						<br />
						unix timestamp is : {userDatetime} <br />
						user timezone is: {userTZ} <br />
					</div>
					<div className='col-lg-3'></div>
				</div>
			</div>
		</div>
	);
};

export default DateTime;
