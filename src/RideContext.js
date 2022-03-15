import React, { createContext, useContext, useEffect, useState } from 'react';
const Rides=createContext();

const RideContext = ({children}) => {
    const [username,setUsername]=useState('User Name');
    const [userimg,setUserImg]=useState("Img");
    const [stationCode,setStationCode]=useState(0);
    const [rides,setRides]=useState([]);
    const [filter,setFilter]=useState(false);
    const [state,setState]=useState("any");
    const [city,setCity]=useState("any");
    const [upcoming,setUpcoming]=useState(0);
    const [past,setPast]=useState(0);
    const [nearestrides,setNearestRides]=useState(rides);

    const user=async()=>{ 
        let data=await fetch('https://assessment.api.vweb.app/user');
        let parsedJsonData = await data.json();
        setUsername(parsedJsonData.name);
        setUserImg(parsedJsonData.url);
        setStationCode(parsedJsonData.station_code);
    }
    const ridesData=async()=>{
        let data=await fetch('https://assessment.api.vweb.app/rides');
        let parsedJsonData=await data.json();
        setRides(parsedJsonData);

        setUpcoming(parsedJsonData.filter((ride)=>new Date(ride.date)>new Date()).filter((ride)=>((state.concat(city))==="anyany")?true:((state.concat(city)===state.concat("any"))?ride.state===state:((state.concat(city)==="any".concat(city))?ride.city===city:ride.state===state && ride.city===city))).length);
    
        setPast(parsedJsonData.filter((ride)=>new Date()>new Date(ride.date)).filter((ride)=>((state.concat(city))==="anyany")?true:((state.concat(city)===state.concat("any"))?ride.state===state:((state.concat(city)==="any".concat(city))?ride.city===city:ride.state===state && ride.city===city))).length);
    }

    useEffect(async() => {
      await user().catch(console.error);
      await ridesData().catch(console.error);
    }, []);
    

  return (
  <Rides.Provider value={{username,userimg,stationCode,rides,setRides,filter,setFilter,state,setState,city,setCity,upcoming,setUpcoming,past,setPast,nearestrides,setNearestRides}}>
  {children}
  </Rides.Provider>)
};

export default RideContext;
export const RideState=()=>useContext(Rides);