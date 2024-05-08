import {useState} from 'react'

import "./home.css"
import Header from '../../components/Header/header'
import ExploreMenu from "../../components/ExploreMenu/exploreMenu"
import DisplayFoodItems from '../../components/DisplayFoodItems/displayFoodItems'
const Home = () => {

    const [category, setCategory] = useState('All')

    return(
        <div className="home">
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <DisplayFoodItems category={category}/>
        </div>
    )
}

export default Home