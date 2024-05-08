import { useState } from "react"
import "./navbar.css"
import { assets } from "../../assets/assets"

const Navbar = () => {
    
    const [menuItem, setMenuItem] = useState("Home")

    const onclickMenuItem = (event) => {
        const activeMenuItem = event.target.textContent;
        setMenuItem(activeMenuItem);
        
    }
    console.log(menuItem)
    

    return(
        <div className="navbar">
            <img src={assets.Food_delivery_logo} alt="logo" className="logo"/>
            <ul className="menu">
                <li onClick={onclickMenuItem} className={menuItem==="Home"?"active menu-item": "menu-item"}>Home</li>
                <li onClick={onclickMenuItem} className={menuItem==="Menu"?"active menu-item": "menu-item"}>Menu</li>
                <li onClick={onclickMenuItem} className={menuItem==="Mobile-App"?"active menu-item": "menu-item"}>Mobile-App</li>
                <li onClick={onclickMenuItem} className={menuItem==="Contact Us"?"active menu-item": "menu-item"}>Contact Us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} className="search-icon" alt="search-icon" />
                <div className="navbar-cart">
                    <img src={assets.basket_icon} class="cart-icon" alt="cart" />
                    <div className="cart-status-dot"></div>
                </div>
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar