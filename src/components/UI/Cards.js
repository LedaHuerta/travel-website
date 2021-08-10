import React from 'react'

import './Cards.css';

import CardItem from './CardItem';

const Cards = () => {
    return (
      <div className="cards">
        <h2>Check out this EPIC destinations!</h2>
        <div className="container__cards">
          <div className="wrapper__cards">
            <ul className="items__cards">
              <CardItem
                src="../../assets/images/img-9.jpg"
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
                path="/services"
              />
              <CardItem
                src="../../assets/images/img-2.jpg"
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Luxury"
                path="/services"
              />
              <CardItem
                src="../../assets/images/img-3.jpg"
                text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                label="Mystery"
                path="/services"
              />
              <CardItem
                src="../../assets/images/img-4.jpg"
                text="Experience Football on Top of the Himilayan Mountains"
                label="Adventure"
                path="/products"
              />
              <CardItem
                src="../../assets/images/img-8.jpg"
                text="Ride through the Sahara Desert on a guided camel tour"
                label="Adrenaline"
                path="/sign-up"
              />
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Cards
