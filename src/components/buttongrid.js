import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/buttongrid.css';
import Footer from '../components/footer'

const ButtonGrid = ({ onsetNumber }) => {
  const handleCardClick = (cardTitle) => {
    onsetNumber(cardTitle);
  };

  const cardStyle = {
    borderRadius: "2vh",
    border: "1px solid #BA9359",
    fontSize: "12px",
    marginBottom: "20px",
    cursor: "pointer"
  };

  const cardBodyStyle = {
    height: "100px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  };


  return (
    <div className="background-container mt-4">
      <div className="d-flex flex-column min-vh-100 justify-content-center">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center mb-1">
            <div className="col-lg-3 col-md-6 col-12 mb-1">
              <div className="card" onClick={() => handleCardClick(0)} style={cardStyle}>
                <div className="card-body" style={cardBodyStyle}>
                  <div>
                    <h5 className="card-title">Latest<span><i class="fa-solid fa-newspaper px-2"></i></span></h5>
                    <p className="card-text">
                      Stay updated with the latest news and trends from around the world.
                    </p>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-1">
              <div className="card" onClick={() => handleCardClick(1)} style={cardStyle}>
                <div className="card-body" style={cardBodyStyle}>
                  <div>
                    <h5 className="card-title">World<span><i class="fa-solid fa-earth-americas px-2"></i></span></h5>
                    <p className="card-text">
                      Explore global news, events, and happenings from various countries.
                    </p>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-1">
              <div className="card" onClick={() => handleCardClick(2)} style={cardStyle}>
                <div className="card-body" style={cardBodyStyle}>
                  <div>
                    <h5 className="card-title">Entertainment<span><i class="fa-solid fa-champagne-glasses px-2"></i></span></h5>
                    <p className="card-text">
                      Get the latest updates from the world of entertainment, movies, and music.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-1">
            <div className="col-lg-3 col-md-6 col-12 mb-1">
              <div className="card" onClick={() => handleCardClick(3)} style={cardStyle}>
                <div className="card-body" style={cardBodyStyle}>
                  <div>
                    <h5 className="card-title">Sports<span><i class="fa-solid fa-baseball-bat-ball px-2"></i></span></h5>
                    <p className="card-text">
                      Catch up on the latest sports news, scores, and highlights.
                    </p>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-1">
              <div className="card" onClick={() => handleCardClick(4)} style={cardStyle}>
                <div className="card-body" style={cardBodyStyle}>
                  <div>
                    <h5 className="card-title">Technology<span><i class="fa-solid fa-microchip px-2"></i></span></h5>
                    <p className="card-text">
                      Discover the latest advancements and news in technology and innovation.
                    </p>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-1">
              <div className="card" onClick={() => handleCardClick(5)} style={cardStyle}>
                <div className="card-body" style={cardBodyStyle}>
                  <div>
                    <h5 className="card-title">Business <span><i class="fa-solid fa-city px-2"></i></span></h5>

                    <p className="card-text">
                      Stay informed on business news, market trends, and economic updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-md-none mt-3">
      <Footer />
      </div>
    </div>
  );
};

export default ButtonGrid;
