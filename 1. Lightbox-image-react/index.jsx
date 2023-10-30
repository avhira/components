/* eslint-disable react/prop-types */
import { useState } from 'react';
import './style.css';

const LightboxImage = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImageIndex(null);
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="gallery-img">
        {images.map((image, index) => (
          <img key={image.id} src={image.image} alt={image.alt} onClick={() => openLightbox(index)} />
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox-overlay">
          <div className="lightbox">
            <button className="close-btn" onClick={closeLightbox}>
              &times;
            </button>
            <button className="nav-btn prev-btn" onClick={showPrevImage}>
              &lt;
            </button>
            <img src={images[selectedImageIndex].bigImg} alt={images[selectedImageIndex].alt} />
            <button className="nav-btn next-btn" onClick={showNextImage}>
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LightboxImage;
