import React, {useState, useEffect} from 'react'

const Search = ({dataContainer, elements}) =>{
    const [data, setData] = useState([])
    const [hola, setHole] = useState([])
    useEffect(() => {
        if(elements){
            setData([elements])
        }
    }, [elements])
    useEffect(() => {
        if(dataContainer){
            console.log('askdlak ',data)
        } else {
            return null
        }
    }, [dataContainer])
    return(
        <p>Search</p>
    )
}

export default Search