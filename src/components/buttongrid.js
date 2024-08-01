import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/buttongrid.css';

const ButtonGrid = ({onsetNumber}) => {
  

  const handleCardClick = (cardTitle) => {
    onsetNumber(cardTitle);
  };

  return (
    <div className='aa'>
      <div className="container-fluid d-flex flex-column justify-content-end">
        <div className="row d-flex justify-content-center align-items-center mb-3">
          <div className="col-3">
            <a href='#' style={{textDecoration:"none"}}>
              <div className="card" onClick={() => handleCardClick(0)}   style={{
                  borderRadius: "2vh",
                  border: "1px solid #BA9359",
                  background:"transparent",
                  fontSize: "12px"
                
                }}>
                <div className="card-body">
                  <h5 className="card-title">Latest</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-3">
            <div className="card" onClick={() => handleCardClick(1)} style={{
                  borderRadius: "2vh",
                  border: "1px solid #BA9359",
                  background:"transparent",
                  fontSize: "12px"
                
                }}>
              <div className="card-body">
                <h5 className="card-title">World</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" onClick={() => handleCardClick(2)} style={{
                  borderRadius: "2vh",
                  border: "1px solid #BA9359",
                  background:"transparent",
                  fontSize: "12px"
                
                }}>
              <div className="card-body">
                <h5 className="card-title">Entertainment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-3">
          <div className="col-3">
            <div className="card" onClick={() => handleCardClick(3)} style={{
                  borderRadius: "2vh",
                  border: "1px solid #BA9359",
                  background:"transparent",
                  fontSize: "12px"
                
                }}>
              <div className="card-body">
                <h5 className="card-title">Sports</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" onClick={() => handleCardClick(4)} style={{
                  borderRadius: "2vh",
                  border: "1px solid #BA9359",
                  background:"transparent",
                  fontSize: "12px"
                
                }}> 
              <div className="card-body">
                <h5 className="card-title">Technology</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" onClick={() => handleCardClick(5)} style={{
                  borderRadius: "2vh",
                  border: "1px solid #BA9359",
                  background:"transparent",
                  fontSize: "12px"
                
                }}>
              <div className="card-body">
                <h5 className="card-title">Busniess</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonGrid;
