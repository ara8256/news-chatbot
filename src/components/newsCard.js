import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/newsbar.css'

const NewsCard = ({ headline, thumbnail, description }) => {
  const [image, setImage] = useState(null);

  const fetchImage = (thumbnail) => {
    try {
      console.log("Fetching image with thumbnail:", thumbnail);
      if (thumbnail ) {
        const imageObject = {
          src: `data:image/jpg;base64,${thumbnail}`,
          alt: 'Image'
        };
        console.log("Image object created:", imageObject);
        setImage(imageObject);
      } else {
        console.log("Invalid thumbnail or base64 missing");
        console.log(thumbnail)
        setImage(null); // Clear the image if there's no valid thumbnail
      }
    } catch (error) {
      console.error('Failed to load image:', error);
    }
  };

  useEffect(() => {
    fetchImage(thumbnail);
  }, [thumbnail]);

  return (
    <div className="container mt-4">
      <div className="card newsbar">
        <div className="row no-gutters">
          <div className="col-md-4">
            {image ? (
              <img src={image.src} className="card-img" alt={image.alt} />
            ) : (
              <img src="path/to/default-image.jpg" className="card-img" alt="Default" />
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{headline}</h1>

             
            </div>
          </div>
        </div>
        <div className='row'>
        <p className="card-text" style={{fontSize:"3vh"}}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
