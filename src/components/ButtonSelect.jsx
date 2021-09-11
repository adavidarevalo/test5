import React from 'react'
import {Button} from '../styles/components/ButtonSelect'

const ButtonSelect = ({name, setDataContainer}) =>{

    return(
        <Button
        type="submit"
        value={name}
        name={name}
        onClick={(e)=>{
            /* handleClick(e), */
            setDataContainer(e.target.value)
          }}
        />
    )
}

export default ButtonSelect