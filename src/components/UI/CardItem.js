import React, { Fragment } from "react";
import { Link } from "react-router-dom";


import './CardItem.css';

const CardItem = (props) => {
  return (
    <Fragment>
      <li className="cards-item">
        <Link 
        className="link__cards-item"
        to={ props.path }>
          <figure
          className="pic-wrap__cards-item"
          data-category={ props.label } >
            <img
            className="img__cards-item"
            src={ props.src }
            alt="Travel" />
          </figure>
          <div className="info__cards-item">
              <h5 className="text__cards-item">{ props.text }</h5>
          </div>
        </Link>
      </li>
    </Fragment>
  );
};

export default CardItem;
