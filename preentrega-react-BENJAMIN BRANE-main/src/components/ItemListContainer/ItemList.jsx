import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ items, isLoading }) => {
    return (
        <div>
            <h1>ItemList</h1>

            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <Link to={`/item/${item.id}`}>
                                <h3 className='titleList'>{item.name}</h3>
                                <p className='price'>${item.price}</p>
                                <p className='category'>{item.category}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
};

export default ItemList;
