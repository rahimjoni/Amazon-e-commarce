import React from 'react';
import './Home.css';
import Product from "./Product";

function Home(props) {
    return (
        <div className="home-container">
            <img className="home-image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg"/>
            <div className="home-row">
                <Product id="15423" info='AmazonBasics Stainless Steel Insulated Water Bottle with Spout Lid – 20-Ounce, Grey' price={6.99} rating={4} images='https://images-na.ssl-images-amazon.com/images/I/71nfz7U2f%2BL._AC_SX679_.jpg'/>
                <Product id="45335" info='New Apple iPhone 12 mini (128GB, Blue) [Locked] + Carrier Subscription' price={55.90} rating={5} images='https://m.media-amazon.com/images/I/71sNNCTfMuL._FMwebp__.jpg'/>
                <Product id="24353" info='AmazonBasics Premium Hardside Spinner Suitcase Luggage with Wheels' price={68} rating={3} images='https://images-na.ssl-images-amazon.com/images/I/81D-JCWRgJL._AC_UX522_.jpg'/>
                <Product id="34534" info='Gildan Men Fleece Crewneck Sweatshirt' price={8.02} rating={6} images='https://images-na.ssl-images-amazon.com/images/I/817ZSb1TJmL._AC_UX466_.jpg'/>
            </div>
            <div className="home-row">
                <Product id="34534" info='AmazonBasics 7 Port USB 2.0 Hub Tower with 5V/4A Power Adapter' price={12} rating={4} images='https://images-na.ssl-images-amazon.com/images/I/61IRzLY-EAL._AC_SX679_.jpg'/>
                <Product id="34534" info='VECELO Home Office Chair for Task/Desk Work-Black' price={69.3} rating={4} images='https://images-na.ssl-images-amazon.com/images/I/61jpZLbFJML._AC_SX466_.jpg'/>
                <Product id="34534" info='AmazonBasics Closet Storage Organizer with Fabric Bins and Shelves, Grey - 32.7 x 12.2 x 31 Inches' price={22.02} rating={3} images='https://images-na.ssl-images-amazon.com/images/I/91JgtedH4uL._AC_SX679_.jpg'/>

            </div>
            <div className="home-row">
                <Product id="34534" info='AmazonBasics Volume Limited Wired Over-Ear Headphones for Kids with Two Ports for Sharing, Blue' price={20.02} rating={4} images='https://images-na.ssl-images-amazon.com/images/I/71PHMCTs2eL._AC_SX425_.jpg'/>
                <Product id="34534" info='AmazonBasics GOTS Certified Organic Cotton Bath Towel - 4-Pack, Dusted Orchid' price={41.90} rating={5} images='https://images-na.ssl-images-amazon.com/images/I/91XS5fd8PcL._AC_SX679_.jpg'/>
                <Product id="34534" info='AmazonBasics Professional USB Condenser Microphone with Volume Control and OLED Screen - Black' price={121} rating={4} images='https://images-na.ssl-images-amazon.com/images/I/61aCwunoTkL._AC_SY879_.jpg'/>
                <Product id="34534" info='AmazonBasics Universal Smartphone Holder for Car Air Vent' price={14.78} rating={4} images='https://images-na.ssl-images-amazon.com/images/I/61mc66qf%2BkL._AC_SX679_.jpg'/>

            </div>
        </div>
    );
}

export default Home;