import './App.css';
import { Row } from './Row';
import requests from './requests';
import { Banner } from './Banner';
import { Navbar } from './Navbar';

function App() {
  return (
    <div className="App">

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
    </div>
  );
}

export default App;
