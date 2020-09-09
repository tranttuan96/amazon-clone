import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />

                <div className="home__row">
                    <Product id="5984680" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price={29.29} image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg" rating={5} />

                    <Product id="37344" title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Blue)" price={118.99} image="https://images-na.ssl-images-amazon.com/images/I/61aT8jl8THL._AC_SX679_.jpg" rating={4} />
                </div>

                <div className="home__row">
                    <Product id="4568572" title="Samsung LC27F398FWNXZA Samsung C27F398 27 Inch Curved LED Monitor" price={189.99} image="https://images-na.ssl-images-amazon.com/images/I/91SZVWfPjdL._AC_SX679_.jpg" rating={4} />

                    <Product id="8957992" title="Echo (3rd Gen)- Smart speaker with Alexa- Charcoal" price={98.99} image="https://images-na.ssl-images-amazon.com/images/I/61b4qFTXRML._AC_SX679_.jpg" rating={5} />

                    <Product id="9964142" title="New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 512GB) - Space Gray (4th Generation) with AppleCare+ Bundle" price={1577.99} image="https://m.media-amazon.com/images/I/61GrEskUMAL._AC_UY218_.jpg" rating={5} />

                </div>

                <div className="home__row">
                    <Product id="347322" title="Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)" price={1321.99} image="https://images-na.ssl-images-amazon.com/images/I/81B0xCF%2BPWL._AC_SX679_.jpg" rating={4} />
                </div>
            </div>
        </div>
    )
}

export default Home;
