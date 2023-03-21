import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import errorimg3 from '../images/6.png';

function Error404(){
    return(
        <AnimatePresence>
            <section className="error-404">
                <img src={errorimg3} alt="Pokemon" />
                <h1>PAGE NOT FOUND!!</h1>
                <Link to= '/'>
                    <button>Home</button>
                </Link>
            </section>
        </AnimatePresence>
    )
}

export default Error404