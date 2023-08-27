import carIcon from "./assets/caricon.png"
import driverIcon from "./assets/driver.png"
import operatorIcon from "./assets/operator.png"

function Benefits(){
    return (
        <>
        <div className="benefits-container">
            <header className="benefits-title">Plan your trip now</header>
            <header className="benefits-title2">Quick & easy car rental</header>
            <div className="benefits-processes">
                <div className="benefits-process">
                    <img className="benefits-icon" src={driverIcon}></img>
                    <p className="benefit-title">Select Car</p>
                    <p>We offer a variety of vehicles for all your driving needs.
                        We have the perfect car to meet your needs.
                    </p>
                </div>
                <div className="benefits-process">
                    <img className="benefits-icon" src={operatorIcon}></img>
                    <p className="benefit-title">Select Car</p>
                    <p>We offer a variety of vehicles for all your driving needs.
                        We have the perfect car to meet your needs.
                    </p>
                </div>
                <div className="benefits-process">
                    <img className="benefits-icon" src={carIcon}></img>
                    <p className="benefit-title">Select Car</p>
                    <p>We offer a variety of vehicles for all your driving needs.
                        We have the perfect car to meet your needs.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Benefits