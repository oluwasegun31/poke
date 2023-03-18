import { useEffect, useState } from "react"
import AnimatedPage from "./animationPage";
import ErrorTemp from "./error";
import Loader from "./loader";

function Character(){
    const [inputNum, setInputNum] = useState(1);
    const [submitNum, setSubmitNum] = useState(inputNum);
    const [frontDef, setFrontDef] = useState("");
    const [frontShin, setFrontShin] = useState("");
    const [backDef, setBackDef] = useState("");
    const [backShin, setBackShin] = useState("");
    const [pokeName, setPokeName] = useState("");
    const [pokeHeight, setPokeHeight] = useState("");
    const [pokeWeight, setPokeWeight] = useState("");
    const [pokeBaseExp, setBaseExp] = useState("");
    const [pokeAbility, setPokeAbility] = useState(null);
    const [pokeStats, setPokeStats] = useState(null);

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    const submitHandle = (e)=>{
        e.preventDefault()
        setSubmitNum(inputNum)
        setIsLoading(true)
    }

    useEffect(()=>{
       setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${submitNum}`)
                .then(res=>{
                    if(!res.ok){
                        throw Error('Unable to load your reequest')
                    }
                    return res.json()
                })
                .then(data=>{
                    console.log(data)
                    setFrontDef(data.sprites.front_default)
                    setFrontShin(data.sprites.front_shiny)
                    setBackDef(data.sprites.back_default)
                    setBackShin(data.sprites.back_shiny)
                    setPokeName(data.name)
                    setPokeHeight(data.height)
                    setPokeWeight(data.weight)
                    setBaseExp(data.base_experience)
                    setPokeAbility(data.abilities)
                    setPokeStats(data.stats)
                    
                    setIsLoading(false)
                    setIsError(null)
                })
                .catch(err=>{
                    console.log(err.message)
                    setIsError(err.message)
                    setIsLoading(false)
                })
       }, 5000);
    }, [submitNum])

    return(
        <AnimatedPage >
        <>
        {isLoading && <Loader />}
        {isError && <ErrorTemp isError={isError}/>}
        <div className="characters">
            <form className="input-btn"
                onSubmit={submitHandle}
            >
                <input
                 type="text"
                 value={inputNum}
                 onChange = {e=> setInputNum(e.target.value)}
                 />
                <button>GO</button>
            </form>
            <section className="character-image">
                <div className="c-images">
                    <img src={frontDef} alt="PokeImg Front1" />
                    <img src={frontShin} alt="PokeImg Front2" />
                    <img src={backDef} alt="PokeImg Back1" />
                    <img src={backShin} alt="PokeImg Back2" />
                </div>
                <p>NAME: <span className='c-name'>{pokeName}</span></p>
            </section>
            <section className="character-stats">
                <p>WEIGHT: <span className="s-name">{pokeWeight}</span></p>
                <p>HEIGHT: <span className="s-name">{pokeHeight}</span></p>
                <p>BASE EXP: <span className="s-name">{pokeBaseExp}</span></p>
                <div className="stats-Mul">
                    <p>ABILITIES:</p>
                    <div className="stats-order">
                        {pokeAbility && pokeAbility.map((item, pos)=>{
                            return(
                            <div key={pos}>
                                <p><span className="s-name">{item.ability.name}</span></p>
                            </div>
                            )
                        })}
                    </div>
                </div>
                <div className="stats-Mul">
                    <p>STATS:</p>
                    <div className="stats-order">
                        {pokeStats && pokeStats.map((item, pos)=>{
                            return(
                                <div key={pos}>
                                    <p>{item.stat.name} | <span className="s-name">{item.base_stat}</span></p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
        </>
        </AnimatedPage>
        
    )
}

export default Character