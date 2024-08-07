import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/newsbar.css'
import '../components/footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import svg from "../pictures/speaker-sketch-loud-volume-interface-tool-svgrepo-com.svg"
import Footer from '../components/footer';

const NewsCard = ({ headline, thumbnail, description, link }) => {
  const [image, setImage] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const fetchImage = (thumbnail) => {
    try {
      console.log("Fetching image with thumbnail:", thumbnail);
      if (thumbnail) {
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


  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(description);
        // utterance.lang = language;
        // console.log(utterance.lang);
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);

        // Reset the isSpeaking flag when the speech ends
        utterance.onend = () => {
          setIsSpeaking(false);
        };
      }
    } else {
      alert('Sorry, your browser does not support text to speech!');
    }
  }

  useEffect(() => {
    fetchImage(thumbnail);
  }, [thumbnail]);

  return (
    <div className="container mt-2 max">

      <div className="card newsbar">
        <div style={{ maxHeight: "74vh", maxWidth: "80vw", overflowY: "auto", overflowX: 'hidden', scrollbarWidth: "none" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              {image ? (
                <img src={image.src} className="card-img mt-1 ml-1" alt={image.alt} />
              ) : (
                <img src="path/to/default-image.jpg" className="card-img" alt="Default" />
              )}
            </div>
            <div className="col-md-8">
              <div className="card-body d-flex">
                <h1 className="card-title">{headline}</h1><span>{link &&

                  <a href={link}>
                    <i className='fa-solid fa-link'></i>
                    {/* <p style={{color:'black',textDecoration:'none'}}>Visit Site</p> */}
                  </a>

                }</span>


              </div>
            </div>
          </div>
          <div className='row'>
            <div style={{ marginLeft: "2vh" }}>
              <button className="speaker_button mt-1" onClick={handleSpeak}>
                {/* <img src={svg} alt="Speak" style={{ width: '18px', height: '18px' }} /> */}
                <i class="fa-solid fa-volume-high"></i>
              </button>
            </div>
            <div className="card-text" style={{ fontSize: "3vh" }} dangerouslySetInnerHTML={{ __html: description }} />
            {/* <p className="card-text" style={{ fontSize: "3vh" }}>{description}
        </p> */}

          </div>
        </div>
      </div>
      <div className="d-block d-md-none mt-3">
        <Footer link={URL} />
      </div>
    </div>
  );
};

export default NewsCard;
