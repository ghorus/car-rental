import carLogo from "./assets/car.png"
import threeBars from "./assets/threebars.png"
import './assets/nav.css'
// interface Props {
//     text:string;
// }
// {text}:Props
function Nav(){
    return (
    <>
        <div className="nav-container">
            <nav className="navigation">
                <div className="logo-and-text">
                    <img className="car-logo" src={carLogo}/>
                    <span><strong className="car-text">CAR</strong> <br></br>Rental</span>
                </div>
                <div className="links">
                    <a>Home</a>
                    <a>About</a>
                    <a>Vehicle Models</a>
                    <a>Testimonials</a>
                    <a>Our Team</a>
                    <a>Contact</a>
                </div>
                <div className="sign-ups">
                    <a>Sign In</a>
                    <button className="sign-up-btn">Register</button>
                </div>
                <img className="threebars" src={threeBars}></img>
            </nav>
        </div>
    </>)
}
export default Nav