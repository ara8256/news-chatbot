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

import { Component, useState, useEffect } from 'react';

function App() {

  const[query,setQuery] = useState('')
  const[error,setError] = useState('')
  const [messages, setMessages] = useState("");
  const [summary , setSummary] = useState("");
  const [Title , setTitle] = useState("");
  const [Url , setUrl] = useState("");
  const [image, setImage] = useState(null);
  // const [number, setnumber] = useState(0);


  const handelNumber = (number) =>{
    hsndlenumbertiapi(number)
  }




  

const hsndlenumbertiapi = async (number) =>{
  try {
    const response = await fetch('https://wasamkhan.pythonanywhere.com/fixed_requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ number }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    console.log(data.Title)

    setTitle(data.Title);
    setSummary(data.Summary);
    setUrl(data.Webpage);
    setImage(data.Image);

  } catch (error) {
    console.error('Error:', error);
    setError('An error occurred while fetching the response.');
  }
}




  const handleSendMessage = (message) => {
    setMessages(message);
    handleSendMessageApi(message);
    
};



const handleSendMessageApi = async (messages) => {
  try {
    const response = await fetch('https://abdulrehman1122334455.pythonanywhere.com/generate_response_news', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    console.log(data.Title)

    setTitle(data.Title);
    setSummary(data.Summary);
    setUrl(data.Webpage);
    setImage(data.Image);

  } catch (error) {
    console.error('Error:', error);
    setError('An error occurred while fetching the response.');
  }
};







const sendtoapi = () => {
  console.log(messages)
  handleSendMessageApi()
};






  


    const handleAudioRecorded = async (audioBlob) => {
      //setLoading(true); // Start loading
      try {
        const formData = new FormData();
        formData.append('audio', audioBlob,'audio.wav');
        const res = await axios.post('https://wasamkhan.pythonanywhere.com/transcribe', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(res.data.transcription)
        setQuery(res.data.transcription);
        handleSendMessageApi(res.data.transcription)
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
      <Sidebar link = {Url}/>
    </div>
    <div className='col-10'>

      {Title && thumbnail1 &&
      <NewsCard
       headline={Title}
       thumbnail={image}
       description={summary}
       />}

       {!Title && <ButtonGrid onsetNumber =  {handelNumber}/>}
      
      <InputForm  onSendMessage={handleSendMessage} onAudioRecorded={handleAudioRecorded}/>
      {/* <AudioRecorder onAudioRecorded={handleAudioRecorded} /> */}

    </div>
   </div>
    </div>
    </div>
  );
}

export default App;
