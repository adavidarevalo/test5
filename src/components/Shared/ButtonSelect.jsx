import React, {useEffect, useState} from 'react'
import {Button} from '../../styles/components/ButtonSelect'

const ButtonSelect = ({name, data, dataSelect, setDataSelect, buttonNone, setButtonNone}) =>{
  const [Element, setElement] = useState(false)

  useEffect(() => {
    setElement(false)
  }, [buttonNone])
  
    const handleClick = async (e) => {
      await setButtonNone(!buttonNone)
      await setDataSelect(data.filter(item=>item.skills.includes(e.target.name)))
      setElement(true)
    }

    return(
        <Button
        type="submit"
        value={name}
        name={name}
        className={Element && 'Active'}
        onClick={(e)=>{
            handleClick(e)
          }}
        />
    )
}

export default ButtonSelect