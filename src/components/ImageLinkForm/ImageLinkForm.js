import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div className='ma4 mt0'>
          <p className="f3 white">
            {'This app will detect faces in your pictures and blur them out'}
          </p>
          <p className="f3 white">{'Here are some example links:'}</p>
            <p>{'https://www.cdc.gov/homepage/images/cdc-in-action/fellowships-720px.jpg'}</p>
            <p>{'http://epsassets.manchester.ac.uk/medialand/jodrell-bank/people/thumbnails/people-staff-01_700x315.jpg'}</p>  
            <p>{'https://marketplace.canva.com/MADGv_btwRg/7/thumbnail_large/canva-woman-falling-in-line-holding-each-other-MADGv_btwRg.jpg'}</p>
          
          <div className='center'>
            <div className="pa4 br3 shadow-5 form center">
              <input className='f4 pa2 w-70 center' type="text" onChange={onInputChange}/>
              <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
              </div>
          </div>
        </div>
        );
}

export default ImageLinkForm;