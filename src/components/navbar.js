import {FaBars, FaTimes} from "react-icons/fa"
import { useRef} from 'react'
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
                <a href='/'>HOME</a>
                <a href='/characters'>CHARACTERS</a>
                <a href='/about'>ABOUT</a>
                <a href='/documentation'>DOCUMENTATION</a>
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
