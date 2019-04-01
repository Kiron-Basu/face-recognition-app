import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
           <div className='absolute mt2'>
              <img id='inputImg' alt='' src={imageUrl} width='500px' height='auto' />
              {console.log(box.length)}
                {
                 box.length ? 
                    box.map( function(item, i) { 
                    return <div key={i} className='bounding-box' style={{top: item.topRow, right: item.rightCol, bottom: item.bottomRow, left: item.leftCol}} ><div className='test'></div></div>
                })
                 :
                 ''
                 }
           </div>
        </div>
     )
  }


export default FaceRecognition;
