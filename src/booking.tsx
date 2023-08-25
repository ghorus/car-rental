function Booking(){
    return (
        <>
            <div className="hero-container">
                <div className="hero-texts">
                    <p className="hero1-text">Plan your trip now</p>
                    <p className="hero2-text">Save <span className="hero2-highlight">big</span> with our car rental</p>
                    <p className='hero3-text'>Rent the car of your dreams. Unbeatable prices, unlimited miles,
                    unlimited miles, flexible pick-up options and much more.
                    </p>
                    <div className="book-btns">
                    <button className="booking-btn">Book Ride ✅</button>
                    <button className="learn-more-btn">Learn More &gt;</button>
                    </div>
                </div>
            </div>
            <div className="booking-container">
            <div className="book-times">
                <p className="booking-title">Book a car</p>
                <div className="book-times-inputs">
                <div className="book-times-input">
                    <p>🚗 Select Your Car Type <span className="asterisk">*</span></p>
                    <select className="car-types-options">
                    <option value="" disabled selected>Select your option</option>
                    <option>Volvo</option>
                    <option>Saab</option>
                    <option>Mercedes</option>
                    <option>Audi</option>
                    </select>
                </div>
                <div className="book-times-input">
                    <p>📍 Pick up <span className="asterisk">*</span></p>
                    <select className="car-types-options">
                    <option value="" disabled selected>Select your option</option>
                    <option>Los Angeles</option>
                    <option>Ontario</option>
                    <option>San Diego</option>
                    <option>San Francisco</option>
                    </select>
                </div>
                <div className="book-times-input">
                    <p>📍 Drop-off <span className="asterisk">*</span></p>
                    <select className="car-types-options">
                    <option value="" disabled selected>Select your option</option>
                    <option>Los Angeles</option>
                    <option>Ontario</option>
                    <option>San Diego</option>
                    <option>San Francisco</option>
                    </select>
                </div>
                <div className="book-times-input">
                    <p>📅 Pick Up <span className="asterisk">*</span></p>
                    <select className="car-types-options">
                    <option value="" disabled selected>Select your option</option>
                    <option>Los Angeles</option>
                    <option>Ontario</option>
                    <option>San Diego</option>
                    <option>San Francisco</option>
                    </select>
                </div>
                <div className="book-times-input">
                    <p>📅 Drop-off <span className="asterisk">*</span></p>
                    <select className="car-types-options">
                    <option value="" disabled selected>Select your option</option>
                    <option>Los Angeles</option>
                    <option>Ontario</option>
                    <option>San Diego</option>
                    <option>San Francisco</option>
                    </select>
                </div>
                <button className="search-btn">Search</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default Booking