import React from 'react';
import foto2 from '../../assets/3.jpg';
import './Polaroid.css';

function PolaroidImage() {
  return (
    <div className="polaroid-wrapper">
      <div className="polaroid">
        <div className="polaroid-inner">
          <img 
            src={foto2} 
            alt="About Me" 
            className="polaroid-image"
          />
          <div className="polaroid-caption">
            <p>Aldy Naufal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PolaroidImage;