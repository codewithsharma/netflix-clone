import './App.css';
import { Row } from './Row';
import requests from './requests';
import { Banner } from './Banner';
import { Navbar } from './Navbar';
import { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';
import Footer from './Footer';

function App() {
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])
  return (
   <>
  { loading === false?

   (<div className="App">

      <Navbar/>
      <Banner/>

      <Row title ="Netflix Original" fetchURL ={requests.fetchNetflixOriginals}
      isLargeRow ={true} />
      <Row title ="Trending" fetchURL ={requests.fetchTrending}/>
      <Row title ="Top-Rated" fetchURL ={requests.fetchTopRated}/>
      <Row title ="Horror Movies" fetchURL ={requests.fetchHorrorMovies}/>
      <Row title ="Romance" fetchURL ={requests.fetchRomanceMovies}/>
      <Row title ="Comedy" fetchURL ={requests.fetchComedyMovies}/>
      <Row title ="Action" fetchURL ={requests.fetchActionMovies}/>
      <Row title ="Documentry" fetchURL ={requests.fetchDocumentaries}/>
      <Footer/>
    </div> ):
    <div><LoadingScreen/></div>
}
   </>    
    
  );
}

export default App;
