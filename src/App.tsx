import './App.css'
import Nav from './Nav'
import Booking from './booking'
import car from "./assets/big-car.png"
import blob from "./assets/blob.png"
function App() {
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
   
    </>
  )
}

export default App
