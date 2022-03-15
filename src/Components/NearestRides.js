import React, { useEffect} from 'react';
import { RideState } from '../RideContext';
import Ride from './Ride';
import notfound from '../Images/NotFound.png';

const NearestRides = () => {
    const {rides,stationCode,state,city,setUpcoming,setPast,nearestrides,setNearestRides}=RideState();

      rides.map((ride)=>{
        let ans=Math.abs(ride.origin_station_code-stationCode);
        ride.station_path.map((path)=>{
            ans=Math.min(ans,Math.abs(path-stationCode));
        });
        ans=Math.min(ans,Math.abs(ride.destination_station_code-stationCode));
        ride["distance"]=ans;
      });
  
      const compareTwo=(a,b)=>{
        if(a.distance>b.distance)return 1;
        else if(a.distance<b.distance)return -1;
        else return 0;
      }
      rides.sort(compareTwo); 

      const filterdata=()=>{
        setNearestRides(rides.filter((ride)=>((state.concat(city))==="anyany")?true:((state.concat(city)===state.concat("any"))?ride.state===state:((state.concat(city)==="any".concat(city))?ride.city===city:ride.state===state && ride.city===city))));

        setUpcoming(rides.filter((ride)=>new Date(ride.date)>new Date()).filter((ride)=>((state.concat(city))==="anyany")?true:((state.concat(city)===state.concat("any"))?ride.state===state:((state.concat(city)==="any".concat(city))?ride.city===city:ride.state===state && ride.city===city))).length);
    
        setPast(rides.filter((ride)=>new Date()>new Date(ride.date)).filter((ride)=>((state.concat(city))==="anyany")?true:((state.concat(city)===state.concat("any"))?ride.state===state:((state.concat(city)==="any".concat(city))?ride.city===city:ride.state===state && ride.city===city))).length);

      }
      useEffect(() => {
          filterdata();
      }, [state,city])
      
  return (
    <div style={{padding:"0 30px"}}>
        {(state.concat(city))==="anyany"?rides.map((r)=>(<Ride key={r.id} rideInfo={r}/>)):nearestrides.length===0?(<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><img style={{width:"30%"}} src={notfound} alt="Rides Not Found" /></div>):nearestrides.map((r)=>(<Ride key={r.id+r.origin_station_code} rideInfo={r}/>))}
    </div>
  )
}

export default NearestRides;
