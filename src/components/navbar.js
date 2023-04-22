import {FaBars, FaTimes} from "react-icons/fa"
import { useRef} from 'react'
import { Link } from "react-router-dom";
function Navbar(){
    const navRef = useRef();
    const showNavBar = ()=>{
        navRef.current.classList.toggle("responsive_nav")
        
    }

    return(
        <nav>
            <div className="logo">
                <p>POKÉ</p>
            </div>
            <div className="nav-links" ref={navRef}>
                <Link to='/'>HOME</Link>
                <Link to='/character'>CHARACTERS</Link>
                <Link to='/about'>ABOUT</Link>
                <button className='nav-btn nav-close' onClick={showNavBar}>
                    <FaTimes />
                </button>
            </div>
            
            <button onClick={showNavBar}  className='nav-btn nav-open' >
                <FaBars />
            </button>
        </nav>
    )
}
export default Navbar
