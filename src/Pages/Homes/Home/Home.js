import React from 'react';
import Banner from '../Banner.js/Banner';
import BookCategory from '../BookCategory/BookCategory';
import Customer from '../Customer/Customer';
import '../Home.css'
import LatestCollection from '../LatestCollection/LatestCollection';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <BookCategory></BookCategory>
            <LatestCollection></LatestCollection>
            <Customer></Customer>
        </div>
    );
};

export default Home;