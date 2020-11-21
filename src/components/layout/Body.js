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
        <div className='image-container' id='image-container'>
          <a href='https://wine.com'>
            {/*  ////////////  IMAGE   /////////////////*/}
            <img id='image-photo' src={maple} alt='Bourbon maple' />
          </a>
        </div>
        {/* prettier-ignore */}
        <div className='info-container' id='info-container'>
          <div className id="info-header">

          <h3>Pappy Van Winkle 25yr - $750</h3>
          </div>
          <div className='info-text' id='info-text'>

          <p> Lorem </p>
          <p> Lorem </p>
          </div>
        </div>
      </div>
      <div className='body-section' id='body-section'>
        <div className='image-container' id='image-container'>
          {/*  ////////////  IMAGE   /////////////////*/}
          <a href='wine.com'>
            <img id='image-photo' src={ombre} alt='blackberry ombre' />
          </a>
        </div>
        {/* prettier-ignore */}
        <div className='info-container' id='info-container'>
          <div className="info-header" id="info-header">

          <h3>2nd Body Section with Background photo</h3>
          </div>
          <div className='info-text' id='info-text'>

          <p> Image is background image instead of a tag with img inside.... lis delectus ad maiores iure sunt velit, ipsam itaque! Cum blanditiis in maiores asperiores vitae illo repudiandae soluta nemo doloremque quo quaerat dolorum, ab quas fugiat! Officia officiis temporibus dolorum fuga animi odio. Nemo nostrum, ullam voluptatem beatae placeat officia, quos, blanditiis quaerat quis possimus sequi alias? Dicta officiis excepturi optio repellat accusamus soluta doloremque facilis inventore iure! Error, dolores. Amet repellat eligendi in id reprehenderit corrupti ipsum cumque ut, neque cupiditate similique repudiandae sequi minima, doloribus suscipit. </p>
          <p> Lorem </p>
          </div>
        </div>
      </div>
      <div className='body-section' id='body-section'>
        <div className='image-container' id='image-container'>
          {/*  ////////////  IMAGE   /////////////////*/}
          <a href='wine.com'>
            <img id='image-photo' src={maple} alt='bourbon maple cranberry' />
          </a>
        </div>
        {/* prettier-ignore */}
        <div className='info-container' id='info-container'>
          <div className="info-header" id="info-header">

          <h3>Title</h3>
          </div>
          <div className='info-text' id='info-text'>

          <p> Image is background image instead of a tag with img inside.... lis delectus ad maiores iure sunt velit, ipsam itaque! Cum blanditiis in maiores asperiores vitae illo repudiandae soluta nemo doloremque quo quaerat dolorum, ab quas fugiat! Officia officiis temporibus dolorum fuga animi odio. Nemo nostrum, ullam voluptatem beatae placeat officia, quos, blanditiis quaerat quis possimus sequi alias? Dicta  </p>
          <p> Lorem </p>
          </div>
        </div>
      </div>
      <div className='body-section' id='body-section'>
        <div className='image-container' id='image-container'>
          {/*  ////////////  IMAGE   /////////////////*/}
          <a href='wine.com'>
            <img id='image-photo' src={ombre} alt='blackberry ombre' />
          </a>
        </div>
        {/* prettier-ignore */}
        <div className='info-container' id='info-container'>
          <div className="info-header" id="info-header">

          <h3>Headline goes here. A few extra words for spacing.</h3>
          </div>
          <div className='info-text' id='info-text'>

          <p> Image is background image instead of a tag with img inside.... lis delectus ad maiores iure sunt velit, ipsam itaque! Cum blanditiis in  </p>
          <p> Lorem </p>
          </div>
        </div>
      </div>
      <div className='body-section' id='body-section'>
        <div className='image-container' id='image-container'>
          {/*  ////////////  IMAGE   /////////////////*/}
          <a href='wine.com'>
            <img id='image-photo' src={peppermint} alt='peppermint bark' />
          </a>
        </div>
        {/* prettier-ignore */}
        <div className='info-container' id='info-container'>
          <div className="info-header" id="info-header">

          <h3>Short Headline</h3>
          </div>
          <div className='info-text' id='info-text'>

          <p> Image is background image instead of a tag with img inside.... lis delectus . </p>
          <p> Lorem </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
