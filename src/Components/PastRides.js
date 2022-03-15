import React from 'react'
import { RideState } from '../RideContext';
import Ride from './Ride';
import notfound from '../Images/NotFound.png';

const PastRides = () => {
    const {rides,state,city,setUpcoming,setPast}=RideState();

    let allupcomingrides=rides.filter((ride)=>new Date(ride.date)>new Date()).filter((ride)=>((state.concat(city))==="anyany")?true:((state.concat(city)===state.concat("any"))?ride.state===state:((state.concat(city)==="any".concat(city))?ride.city===city:ride.state===state && ride.city===city)));
    setUpcoming(allupcomingrides.length);

    let allpastrides=rides.filter((ride)=>new Date()>new Date(ride.date)).filter((ride)=>((state.concat(city))==="anyany")?true:((state.concat(city)===state.concat("any"))?ride.state===state:((state.concat(city)==="any".concat(city))?ride.city===city:ride.state===state && ride.city===city)));
    setPast(allpastrides.length);

    return (
      <div style={{padding:"0 30px"}}>
      {allpastrides.length===0?(<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><img style={{width:"30%"}} src={notfound} alt="Rides Not Found" /></div>):allpastrides.map((r)=>(<Ride key={r.id+r.origin_station_code} rideInfo={r}/>))}
      </div>
    )
}

export default PastRides;