import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import InputForm from './components/inputform';
import AudioRecorder from './components/AudioRecorder'
import ButtonGrid from './components/buttongrid';
import NewsCard from './components/newsCard';
import thumbnail1 from "./image.jpg"
import axios from 'axios';

import { Component, useState } from 'react';

function App() {

  const[query,setQuery] = useState('')
  const[error,setError] = useState('')


  const news = {
    headline: "Artificial Intelligence Revolutionizes Industries",
    thumbnail: "/path/to/thumbnail.jpg", // Replace with the actual path to the thumbnail image
    description: "AI offers numerous advantages and has the potential to revolutionize various aspects of our lives..."
  }


    const handleAudioRecorded = async (audioBlob) => {
      //setLoading(true); // Start loading
      try {
        const formData = new FormData();
        formData.append('audio', audioBlob,'audio.wav');
        const res = await axios.post('http://127.0.0.1:5000/transcribe', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(res.data.transcription)
        setQuery(res.data.transcription);
        //handleQuerySubmit(res.data.transcription);
      } catch (error) {
        console.error('Error transcribing audio:', error);
        setError('An error occurred while transcribing the audio.');
        //setResponse(null);

      } finally {
        //setLoading(false); // End loading
      }
  };

  return (
    <div className="App">
   <Navbar />
   <div className='container-fluid'>
   <div className='row'>
    <div className='col-2'>
      <Sidebar/>
    </div>
    <div className='col-10'>
      <NewsCard
       headline={news.headline}
       thumbnail={thumbnail1}
       description={news.description}
       />
      <ButtonGrid />
      <InputForm/>
      <AudioRecorder onAudioRecorded={handleAudioRecorded} />

    </div>
   </div>
    </div>
    </div>
  );
}

export default App;
