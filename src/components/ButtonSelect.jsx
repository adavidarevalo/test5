import React from 'react'
import {Button} from '../styles/components/ButtonSelect'

const ButtonSelect = ({name, data, dataSelect, setDataSelect}) =>{
    const handleClick = async (e) => {
      await setDataSelect(data.filter(item=>item.skills.includes(e.target.name)))
      console.log(dataSelect)
    }

    return(
        <Button
        type="submit"
        value={name}
        name={name}
        onClick={(e)=>{
            handleClick(e)
            //setDataContainer(e.target.value)
          }}
        />
    )
}

export default ButtonSelect