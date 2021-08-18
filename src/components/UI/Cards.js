import React from 'react'

import './Cards.css';
import img2 from '../../assets/images/img-2.jpg';
import img9 from "../../assets/images/img-9.jpg";
import img3 from "../../assets/images/img-3.jpg";
import img4 from "../../assets/images/img-4.jpg";
import img8 from "../../assets/images/img-8.jpg";

import CardItem from './CardItem';

const Cards = () => {
    return (
      <div className="cards">
        <h2>Check out this EPIC destinations!</h2>
        <div className="container__cards">
          <ul className="items__cards">
            <CardItem
              src={img9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img2}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src={img3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={img4}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={img8}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    );
}

export default Cards
