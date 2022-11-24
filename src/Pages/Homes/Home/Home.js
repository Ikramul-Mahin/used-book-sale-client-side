import React from 'react';
import Banner from '../Banner.js/Banner';
import BookCategory from '../BookCategory/BookCategory';
import Customer from '../Customer/Customer';
import '../Home.css'

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <BookCategory></BookCategory>
            <Customer></Customer>
        </div>
    );
};

export default Home;