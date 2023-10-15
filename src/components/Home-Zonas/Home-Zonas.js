import React from 'react';
import './Home-Zonas.css'

function ImageTextBox({ imageUrl }) {
  return (
    <div className="image-text-box">
      <div className="text-container">
        <h2>ZONAS</h2>
        <div>
          <p>Tenemos muchas clases para vos. ¡Anímate a probarlas todas!</p>
          <p>Nuestro equipo de profesores te espera con ganas de explorar tu movimiento y vivir momentos únicos.</p>
          <button className="my-button">Zonas</button>
        </div>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="Imagen" />
      </div>
    </div>
  );
}

export default ImageTextBox;
