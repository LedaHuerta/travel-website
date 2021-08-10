import React, { Fragment } from 'react'

import '../../App.css';

import Cards from '../UI/Cards';
import Hero from './Hero';

const Home = () => {
    return (
       <Fragment>
           <Hero />
           <Cards />
       </Fragment>
    )
}

export default Home


