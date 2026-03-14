import React from 'react'
import { navbarStyles } from '../assets/dummystyles'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={navbarStyles.nav}>
            <div 
            style={{
                backgroundImage: navbarStyles.decorativePattern,
            }}
            className={navbarStyles.decorativePattern}
            ></div>

            <div className={navbarStyles.bubble1}></div>
            <div className={navbarStyles.bubble2}></div>
            <div className={navbarStyles.bubble3}></div>


            <div className={navbarStyles.container}>
                <div className={navbarStyles.logoContainer}>
                    <Link to='/' className={navbarStyles.loginButton}>
                    <div className={navbarStyles.logoinner}>
                        
                    </div>

                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar