
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import AddSongs from './components/AddSongs';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Carousel} from './components/Carousel';
function App() {
  return (
    
<Router>

<Header/>    
    <Routes>   
    <Carousel/>
   <Route path="/AddSongs" element={< AddSongs/>} />
    <Route path="/" element={< Home/>} /> 
  
 
   </Routes>
   
   
    </Router>    
  );
}


export default App;
