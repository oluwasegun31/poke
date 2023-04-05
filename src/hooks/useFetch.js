import { useEffect, useState } from "react";

function useFetch(url){
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

    useEffect(()=>{
        setTimeout(() => {
             fetch(url)
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
        }, 2000);
    }, [url])
    return(
        {frontDef, frontShin, backDef, backShin, pokeName, pokeHeight, pokeWeight, pokeBaseExp, pokeAbility, pokeStats, isLoading, setIsLoading, isError, setIsError}
    )
}

export default useFetch