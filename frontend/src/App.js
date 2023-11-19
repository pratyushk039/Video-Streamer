import './App.css';
import Navbar from './Navbar'
import Vidbox from './videoBox';
import VidList from './videoList'; 
import BG from './fixBG'; 
function App() {
  return (
    <div className="App">
      <BG/>
      <Navbar/>
      <VidList/>
      <Vidbox/>
    </div>
  );
}

export default App;
