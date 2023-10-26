import PropTypes from "prop-types";
import './ItemDetail.css';

const ItemDetail = ({ item, isLoading }) => {
    if (isLoading) {
        return <h2>Loading...</h2> 
    }

    if (!item) {
        return <h2>Producto not found</h2>; 
    }

    return (
        <div>
            <img src={item.image} alt={item.name} />
            <h1 className="title-detail">{item.name}</h1> 
            <p className="price-detail">${item.price}</p> 
            <p className="category-detail">{item.category}</p> 
            <button>Add to cart</button>
        </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
};

export default ItemDetail;
