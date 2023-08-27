import './App.css'
import Booking from './booking'
import Benefits from './benefits'
import blob from "./assets/blob.png"
import car from "./assets/big-car.png"
import Nav from './Nav'
import { useState } from 'react'
function App() {
  const carsChoices = document.getElementsByClassName("cars-choice")
  const cars = ["Audi A1 S-Line","VW Golf 6","Toyota Camry","BMW 320 ModernLine","Mercedes-Benz GLK","VW Passat CC"]
  const model = document.querySelector(".model")
  const models = ["Audi","Volkswagen","Toyota","BMW","Mercedes","Volkswagen"]
  const mark = document.querySelector(".mark")
  const marks = ["A1","Golf 6","Camry","320","Benz GLK","Passat"]
  const year = document.querySelector(".year")
  const years = [2012,2008,2006,2012,2006,2008]
  var [Ind,setInd]= useState()
  function changeMenu(index){
      setInd(index)
      model.innerHTML = models[index]
      mark.innerHTML = marks[index]
      year.innerHTML = years[index]
  }


  return (
    <>
        <div className='car-image-container'>
          <div className='blob-shrink'>
            <span className='blob-block'></span>
            <div className='blob-thing'><img className='blob' src={blob}></img></div>
            </div>
          <div className='car-shrink'>
            <span className='car-block'></span>
            <div className='car-thing'><img className='car' src={car}></img></div>
            </div>
          <div className="hero-and-nav-section">
            <Nav/>
            <Booking/>
          </div>
        </div>
        <Benefits/>
        <div className="fleets-title">
          <p className='fleets-title1'>Vehicle Models</p>
          <p className='fleets-title2'>Our rental fleet</p>
          <p className='fleets-title3'>Choose from a variety of our amazing vehicles to rent for
            your next adventure or business trip.
          </p>
        </div>
        <div className="cars-container">
          <div className="cars-choices">
            {cars.map((car,index)=><div key={index} className={index==Ind?"cars-choice-active":"cars-choice"} onClick={()=>changeMenu(index)}>{car}</div>)}
          </div>
          <img className="cars-choice-image" src={car}></img>
          <div className="cars-choice-prices">
            <p>$50 per day</p>
            <table>
              <thead>
                <tr>
                  <td>Model</td>
                  <td className='model'>Audi</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td className='mark'>A1</td>
                </tr>
                <tr>
                  <td>Year</td>
                  <td className='year'>2012</td>
                </tr>
                <tr>
                  <td>Doors</td>
                  <td>4/5</td>
                </tr>
                <tr>
                  <td>AC</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Transmission</td>
                  <td className='transmission'>Automatic</td>
                </tr>
                <tr>
                  <td>Fuel</td>
                  <td className='fuel'>Gasoline</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='save-banner'>
          <p className='save-title'>Save big with our cheap car rental!</p>
          <p>Top airports.Local suppliers.<span className='save247'>24/7</span> support</p>
        </div>
    </>
  )
}

export default App
