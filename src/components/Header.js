import React, { Component } from 'react';
import Hamburger from "./BurgerButton";

class Header extends Component {
    render() {
        return(
            <div className='headerContainer'>
                <p className='headerTitle'>Blankets by Emily</p>
                <Hamburger />
            </div>
        )
    }
}

export default Header;