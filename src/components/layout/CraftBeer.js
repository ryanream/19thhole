import React from 'react';
import burnemLogo from '../../assets/BurnemLogo.PNG';
import greenbushLogo from '../../assets/GreenbushLogo.png';

const CraftBeer = () => {
	return (
		<div className='body' id='body'>
			<div className='body-section' id='body-section'>
				<div className='image-container' id='image-container'>
					<a
						href='https://burnembrewing.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						{/*  ////////////  IMAGE   /////////////////*/}
						<img id='image-photo' src={burnemLogo} alt={`Burn'em Brewing`} />
					</a>
				</div>

				<div className='info-container' id='info-container'>
					<div className id='info-header'>
						<h3>Burn'Em Brewing</h3>
					</div>
					<div className='info-text' id='info-text'>
						<p>Brewed right here in Michigan City!</p>

						{/* <p>
							"Burn ‘Em Brewing strives to bring our creativity in the way we
							brew and what we brew with to produce the finest and most unique
							brews in our region."
						</p> */}
					</div>
				</div>
			</div>
			<div className='body-section' id='body-section'>
				<div className='image-container' id='image-container'>
					<a
						href='https://www.greenbushbrewing.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						{/*  ////////////  IMAGE   /////////////////*/}
						<img id='image-photo' src={greenbushLogo} alt={`Burn'em Brewing`} />
					</a>
				</div>

				<div className='info-container' id='info-container'>
					<div className id='info-header'>
						<h3>Greenbush Brewing Co.</h3>
					</div>
					<div className='info-text' id='info-text'>
						<p>Brewed 20 miles north in Sawyer, MI</p>

						{/* <p>
							"Here at Greenbush a passion for creatively pushing the boundaries
							of possibility is something of a second nature. Whether it
							pertains to our approach in brewing, methods in cooking,
							merchandising or what have you, we strive to bring something new{' '}
							{'&'}
							exciting to the table."
						</p> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CraftBeer;
