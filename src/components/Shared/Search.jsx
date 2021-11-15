import React from 'react'
import ElementProjects from "./ElementProjects"


const Search = ({inView, setGalery, galery, dataSelect}) =>{
    return(
      <ElementProjects
             inView={inView}
             setGalery={setGalery}
             galery={galery}
             elements={dataSelect}
             />
    )
}

export default Search

