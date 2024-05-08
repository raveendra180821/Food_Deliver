import React from "react";
import { assets } from "../../assets/assets";
import './foodItem.css'

const FoodItem = ({item}) => {
    const {id, name, image, description, price, category} = item
    return(
        <div className="food-item">
            <img src={image} alt="food_item" className="food-item-img"/>
            <div className="food-item-info">
                <p className="food-item-name">{name}</p>
                <img src={assets.rating_starts} alt="rating" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="price">${price}</p>
        </div>
    )
}

export default FoodItem