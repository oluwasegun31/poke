import logo from '../images/LOGO.svg'
function Navbar(){
    return(
        <nav>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav-links">
                <a href='/'>HOME</a>
                <a href='/characters'>CHARACTERS</a>
                <a href='/about'>ABOUT US</a>
                <a href='/documentation'>DOCUMENTATION</a>
            </div>
        </nav>
    )
}
export default Navbar
