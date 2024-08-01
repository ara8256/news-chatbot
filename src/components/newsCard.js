import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsCard = ({ headline, thumbnail, description }) => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={thumbnail} className="card-img" alt="News Thumbnail" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{headline}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
