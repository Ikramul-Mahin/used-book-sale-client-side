import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mx-2">
                <figure className="px-10 pt-10">
                    <img src={category.img} alt="Shoes" className="h-56 w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-gray-600">{category.categoryName}</h2>
                    <div className="card-actions">
                        <Link to={`/categories/${category.categoryName}`}>
                            <button className="btn btn-primary bg-cyan-700">Used Books</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;