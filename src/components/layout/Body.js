import React from 'react';
import ombre from '../../assets/blackberry-ombre.jpg';
import maple from '../../assets/Maple-Cranberry-Bourbon-Cocktail.jpg';
import peppermint from '../../assets/Peppermint-Bark-Martini.jpg';

//  src={maple} src={peppermint}

const Body = () => {
  return (
    // eventually we can make section components and cycle through an array of data.
    <div className='body' id='body'>
      <div className='body-section' id='body-section'>
        <img
          className='section-image'
          id='section-image'
          style={{ height: '300px', width: '300px' }}
          src={ombre}
          alt='...'
        />
        <div>
          <h3>Specialty Holiday Champagne</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            libero?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            sapiente itaque veniam ea voluptates odit vero ratione eligendi quo
            incidunt!
          </p>
        </div>
      </div>
      <div className='body-section' id='body-section'>
        <img
          className='section-image'
          id='section-image'
          style={{ height: '300px', width: '300px' }}
          src={maple}
          alt='...'
        />
        <div>
          <h3>Specialty Holiday Champagne</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            voluptatum harum, inventore consectetur fugiat, incidunt quisquam
            laborum unde dicta eum dolor id, eos recusandae assumenda!
          </p>
        </div>
      </div>
      <div className='body-section' id='body-section'>
        <img
          className='section-image'
          id='section-image'
          style={{ height: '300px', width: '300px' }}
          src={peppermint}
          alt='...'
        />
        <div>
          <h3>Specialty Holiday Champagne</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id
            aperiam aliquid atque obcaecati inventore tempore nobis labore
            repudiandae quidem, blanditiis similique sapiente assumenda
            molestias quibusdam sed? Rerum, eligendi quasi! Voluptatibus sequi
            esse nam, iusto nulla repellat excepturi, commodi cumque ab quod
            nisi aut consectetur facere, perspiciatis neque inventore odit!{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
