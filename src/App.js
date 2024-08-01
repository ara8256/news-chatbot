import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import InputForm from './components/inputform';
import ButtonGrid from './components/buttongrid';
import NewsCard from './components/newsCard';
import thumbnail1 from "./image.jpg"
function App() {
  const news = {
    headline: "Artificial Intelligence Revolutionizes Industries",
    thumbnail: "/path/to/thumbnail.jpg", // Replace with the actual path to the thumbnail image
    description: "AI offers numerous advantages and has the potential to revolutionize various aspects of our lives..."
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
    </div>
   </div>
    </div>
    </div>
  );
}

export default App;
