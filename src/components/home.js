import homeimg1 from '../images/2.png'
import homeimg2 from '../images/5.png'
import homeimg3 from '../images/6.png'
import homeimg4 from '../images/25.png'
import homeimg5 from '../images/150.png'
function Home(){
    return(
        <section className='home'>
            <div className="images">
            <img src={homeimg1} alt="pokeimg" />
            <img src={homeimg2} alt="pokeimg" />
            <img src={homeimg3} alt="pokeimg" />
            <img src={homeimg4} alt="pokeimg" />
            <img src={homeimg5} alt="pokeimg" />
            </div>
            <h1>WELCOME TO POKÉ</h1>
            <p>A site where you can search for your favourite pokemon characters.</p>
        </section>
    )
}

export default Home