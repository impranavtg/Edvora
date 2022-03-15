import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RideState } from '../RideContext';
import Filter from '../Images/Filter.svg';
import FilterPopup from './FilterPopup';
import '../Css/Navigation.css';

const Navigation = () => {
  const {filter,setFilter,upcoming,past}=RideState();
  const handleFilter =()=>{
    if(filter==false) setFilter(true);
    else setFilter(false);
  }

  let location = useLocation();
  return (
    <div className='navigation'>
        <div className="choices">
            <Link to="/" className="rides" style={{borderBottom:`${location.pathname==="/"?"1.6px solid white":"none"}`}}>
            Nearest rides
            </Link>
            <Link to="/upcoming" className="rides" style={{borderBottom:`${location.pathname==="/upcoming"?"1.6px solid white":"none"}`}}>
            Upcoming rides ({upcoming})
            </Link>
            <Link to="/past" className="rides" style={{borderBottom:`${location.pathname==="/past"?"1.6px solid white":"none"}`}}>
            Past rides ({past})
            </Link>
        </div>
        <div className="filters" onClick={handleFilter}>
        <img src={Filter} alt="=" />
        <h3 className='filtertext'>Filters</h3>
        </div>
        <FilterPopup/>
    </div>
  )
}

export default Navigation;