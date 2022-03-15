import { RideState } from "../RideContext";
import "../Css/FilterPopup.css";

const FilterPopup=()=> {
 const{rides,filter,setState,setCity}=RideState();

 const stateHandler=()=>{
 let stateDiv=document.getElementById("state");
 let selectedState=stateDiv?.options[stateDiv?.selectedIndex]?.value;
 setState(selectedState);
 }
 const cityHandler=()=>{
    let cityDiv=document.getElementById("city");
    let selectedCity=cityDiv?.options[cityDiv?.selectedIndex]?.value;
    setCity(selectedCity);
 }
 
 const filteredState= Array.from(new Set(rides.map(a => a.state)))
 .map(state => {
   return rides.find(a => a.state === state)
 }) 

 const filteredCity=Array.from(new Set(rides.map(a => a.city)))
 .map(city => {
   return rides.find(a => a.city === city)
 }) 
  return (
    <div className="filter-popup" style={{display:filter===true?"block":"none"}}>
        <div className="title">
            <h3>Filters</h3>
        </div>

        <div>
            <select  className="state-city" name="State" id="state" onChange={stateHandler}>
            <option value="" disabled selected hidden>State</option>
            <option value="any">Any State</option>
            {filteredState?.map((ride)=>(<option value={ride.state} key={ride.id+ride.origin_station_code}>{ride.state}</option>))}
            </select>
        </div>

        <div>
        <select  className="state-city" name="City" id="city" onChange={cityHandler}>
        <option value="" disabled selected hidden>City</option>
        <option value="any">Any City</option>
            {filteredCity?.map((ride)=>(<option value={ride.city} key={ride.id+ride.origin_station_code}>{ride.city}</option>))}
            </select>
        </div>
    </div>
  )
}

export default FilterPopup;