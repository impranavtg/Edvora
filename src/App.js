import './Css/App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import NearestRides from './Components/NearestRides';
import UpcomingRides from './Components/UpcomingRides';
import PastRides from './Components/PastRides';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App=()=> {
  return (
    <div className='appBody'>
    <BrowserRouter>
    <Header/>
    <Navigation/>
    <Routes>
    <Route exact path="/" element={<NearestRides/>}/>
    <Route exact path="/upcoming" element={<UpcomingRides/>}/>
    <Route exact path="/past" element={<PastRides/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
