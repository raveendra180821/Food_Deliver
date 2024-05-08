import React, {useContext} from 'react'

import './displayFoodItems.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/foodItem'

const DisplayFoodItems = ({category}) => {

    const {food_list} = useContext(StoreContext)

    return(
        <div className='food-items-container'>
            <h1>Top dishes near you</h1>
            <div className='food-items-list'>
                {food_list.map( (item, index) => {
                   return (category==="All" || category===item.category) && <FoodItem key={index} item = {item}/>
                  }
                )}
            </div>
            
        </div>
    )
}

export default DisplayFoodItems