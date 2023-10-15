import React from 'react';
import './Home-NuestrasClases.css'

function ImageTextBox({ imageUrl }) {
  return (
    <div className="image-text-box">
      <div className="image-container">
        <img src={imageUrl} alt="Imagen" />
      </div>
      <div className="text-container">
        <h2>Nuestras Clases</h2>
        <div>
      <p>Tenemos muchas clases para vos. ¡Anímate a probarlas todas!</p>
      <p>Nuestro equipo de profesores te espera con ganas de explorar tu movimiento y vivir momentos únicos.</p>
      <button className="my-button">Clases</button>
      </div>
      </div>
    </div>
  );
}

export default ImageTextBox;
