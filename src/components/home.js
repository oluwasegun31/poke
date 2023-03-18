import homeimg1 from '../images/2.png';
import homeimg2 from '../images/5.png';
import homeimg3 from '../images/6.png';
import homeimg4 from '../images/25.png';
import homeimg5 from '../images/150.png';
import {FaArrowDown} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AnimatedPage from './animationPage';

function Home(){

    return(
        <AnimatedPage>
            <section className='home'>
                <div className="images">
                    <img src={homeimg1} alt="pokeimg" />
                    <img src={homeimg2} alt="pokeimg" />
                    <img src={homeimg3} alt="pokeimg" />
                    <img src={homeimg4} alt="pokeimg" />
                    <img src={homeimg5} alt="pokeimg" />
                </div>
                <h1>WELCOME TO POKÉ</h1>
                <p>A site where you search for all of your favourite pokemon characters.</p>
                <div className="arrow-down">
                    <Link to="/character">
                        <FaArrowDown />
                    </Link>
                </div>
            </section>
        </AnimatedPage>
    )
}

export default Home