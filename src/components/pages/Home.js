import React, { useState } from 'react';
import Banner from '../layout/Banner';
import Nav from '../layout/Nav';
import Menu from '../layout/Menu';
import Body from '../layout/Body';
import CraftBeer from '../layout/CraftBeer';
import Footer from '../layout/Footer';
import Slider from '../layout/Slider';
// import WindowSize from '../hooks/useWindowSize';

const Home = (props) => {
	console.log('WindowSize.props');
	// console.log(props.WindowSize);
	// console.log(display);
	return (
		<div className='parent'>
			<Banner />
			<div className='content'>
				<Nav />
				<Menu />
				<Body />
				{/* <CraftBeer /> */}
				<Slider />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
