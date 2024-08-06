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
import Groq from 'groq-sdk';

import { Component, useState, useEffect } from 'react';

function App() {
  const [userInput, setUserInput] = useState('');
const [newsData, setNewsData] = useState(null);
const [fixedNewsData, setFixedNewsData] = useState(null);
const [index, setIndex] = useState(0);

  const[query,setQuery] = useState('')
  const[error,setError] = useState('')
  const [messages, setMessages] = useState("");
  const [summary , setSummary] = useState("");
  const [Title , setTitle] = useState("");
  const [Url , setUrl] = useState("");
  const [image, setImage] = useState(null);
  // const [number, setnumber] = useState(0);


  const handelNumber = (number) =>{
    fixedRequests(number);
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
    generateResponseNews(message);
    
};



const handleSendMessageApi = async (messages) => {
  try {
    const response = await fetch('https://wasamkhan.pythonanywhere.com/generate_response_news', {
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







// const sendtoapi = () => {
//   console.log(messages)
//   handleSendMessageApi()
// };






  


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
        generateResponseNews(res.data.transcription);
        //handleQuerySubmit(res.data.transcription);
      } catch (error) {
        console.error('Error transcribing audio:', error);
        setError('An error occurred while transcribing the audio.');
        //setResponse(null);

      } finally {
        //setLoading(false); // End loading
      }
  };


// const groq = new Groq({ apiKey: process.env.REACT_APP_GROQ_API_KEY });



const extractKeywordsFromQuery = async (query) => {
  const groq = new Groq({ apiKey:`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`,dangerouslyAllowBrowser: true });
  console.log("query",query)

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Give me the keywords from the following sentence in list format []. Just give the list, no extra words ${query}`,
        },
      ],
      model: 'llama3-70b-8192',
    });

    const keywords = chatCompletion.choices[0]?.message?.content;
    const matches = keywords.match(/\[(.*?)\]/);
    console.log(matches)
    return matches ? matches[1].split(',').map(keyword => keyword.trim()) : [];
  } catch (error) {
    console.error("Error fetching keywords:", error);
    return [];
  }
};

const getNews = async (keywords) => {
  const url = 'https://google-news13.p.rapidapi.com/search';
  const params = new URLSearchParams({
    keyword: keywords,
    lr: 'en-US',
  });

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'b971686e5emsh4b3caeb5d9c63dfp1525efjsn656e0ef7ab43',
      'x-rapidapi-host': 'google-news13.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(`${url}?${params}`, options);
    console.log(response)

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error response data:', errorData);
      console.error('Error response status:', response.status);
      throw new Error('Error fetching news');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error('Error fetching news');
  }
};
const getURLsAndImages = (data) => {
  return data.items.map(item => ({
    url: item.newsUrl,
    thumbnail: item.images?.thumbnail
  })).filter(item => item.url && item.thumbnail);
};

const getTextFromNews = async (pages) => {
  for (let page of pages) {
    try {
      const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(page.url)}`;
      const response = await axios.get(proxyUrl, {
        headers: {
          'Accept-Language': 'en-US,en;q=0.5',
        }
      });

      const parser = new DOMParser();
      const doc = parser.parseFromString(response.data, 'text/html');
      const paragraphs = Array.from(doc.querySelectorAll('p')).map(p => p.textContent).join(' ');

      if (!paragraphs.startsWith('Updated ') && paragraphs) {
        console.log(paragraphs);
        setUrl(page.url);
        return { text: paragraphs, url: page.url, thumbnail: page.thumbnail };
      }
    } catch (error) {
      console.error('Failed to retrieve webpage:', error);
    }
  }
};




const getTitle = async (text) => {
  const groq = new Groq({ apiKey: `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`,dangerouslyAllowBrowser: true });

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Give me the news headline for the following text. Just give the one liner headline only, no extra words ${text}`,
        },
      ],
      model: 'llama3-70b-8192',
    });

    return chatCompletion.choices[0]?.message?.content;
  } catch (error) {
    console.error("Error fetching headline:", error);
    return "Error fetching headline.";
  }
};

const getSummary = async (text) => {
  const groq = new Groq({ apiKey:`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` ,dangerouslyAllowBrowser: true});

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Give me the detailed summary of the following text: ${text}`,
        },
      ],
      model: 'llama3-70b-8192',
    });

    return chatCompletion.choices[0]?.message?.content;
  } catch (error) {
    console.error("Error fetching summary:", error);
    return "Error fetching summary.";
  }
};

const fetchImageBase64 = async (imageUrl) => {
  const corsProxyUrl = 'https://corsproxy.io/?' + encodeURIComponent(imageUrl);
  console.log(corsProxyUrl);
  try {
    const response = await axios.get(corsProxyUrl, { responseType: 'arraybuffer' });
    const base64Image = btoa(
      new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
    return base64Image;
  } catch (error) {
    console.error('Error fetching or encoding image:', error);
    return null;
  }
};

const generateResponseNews = async (userInput) => {
  try {
    const keywords = await extractKeywordsFromQuery(userInput);
    const news = await getNews(keywords);
    const urlsAndImages = getURLsAndImages(news);
    const textFromNews = await getTextFromNews(urlsAndImages);
    const image = textFromNews?.thumbnail ? await fetchImageBase64(textFromNews.thumbnail) : null;
    setImage(image)
    const title = await getTitle(textFromNews.text);
    setTitle(title)
    const summary = await getSummary(textFromNews.text);
    setSummary(summary)
    setUrl(textFromNews.url)
    // setNewsData({ title, summary, url: textFromNews.url, image });
    // setNewsData(news);
  } catch (error) {
    console.error('Error getting the news:', error);
  }
};

const getFixedNews = async (para) => {
  const response = await axios.get(`https://google-news13.p.rapidapi.com/${para}`, {
    params: { lr: 'en-US' },
    headers: {
      'x-rapidapi-key': 'b971686e5emsh4b3caeb5d9c63dfp1525efjsn656e0ef7ab43',
      'x-rapidapi-host': 'google-news13.p.rapidapi.com'
    }
  });

  return response.data;
};

const fixedRequests = async (index) => {
  const endpoints = ['latest', 'world', 'entertainment', 'sport', 'technology', 'business'];

  try {
    const news = await getFixedNews(endpoints[index]);
    const urlsAndImages = getURLsAndImages(news);
    const textFromNews = await getTextFromNews(urlsAndImages);
    const image = textFromNews?.thumbnail ? await fetchImageBase64(textFromNews.thumbnail) : null;
    setImage(image)
    const title = await getTitle(textFromNews.text);
    setTitle(title)
    const summary = await getSummary(textFromNews.text);
    setSummary(summary)
    setUrl(textFromNews.url)
    // setNewsData({ title, summary, url: textFromNews.url, image });
    // setNewsData(news);
  } catch (error) {
    console.error('Error getting the news:', error);
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

      {Title && thumbnail1 && summary &&
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


//   <div className='App'>
//     <Navbar/>
//     <Sidebar/>
//     <div className='maincon'>
//     {Title && thumbnail1 &&
//       <NewsCard
//        headline={Title}
//        thumbnail={image}
//        description={summary}
//        />}

//        {!Title && <ButtonGrid onsetNumber =  {handelNumber}/>}
//        </div>
// </div>
  
  );
}

export default App;
