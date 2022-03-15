import React from 'react';
import '../Css/Ride.css';

const Ride = ({rideInfo}) => {
  return (
    <div className='Ride'>
    <div className="map">
    <img src={rideInfo.map_url} alt="Map Image" />
    </div>
    <div className="ridedetails">
    <h3 className="rideinfo">Ride Id : {rideInfo?.id}</h3>
    <h3 className="rideinfo">Origin Station : {rideInfo?.origin_station_code}</h3>
    <h3 className="rideinfo">station_path : [{rideInfo?.origin_station_code},{rideInfo?.station_path.toString()},{rideInfo?.destination_station_code}]</h3>
    <h3 className="rideinfo">Date : {rideInfo?.date}</h3>
    <h3 className="rideinfo">Distance : {rideInfo?.distance}</h3>
    </div>
    <div className="place">
        <div className="city_state">{rideInfo.city}</div>
        <div className="city_state">{rideInfo.state}</div>
    </div>
    </div>
  )
}

export default Ride;