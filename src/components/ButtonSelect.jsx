import React, {useEffect, useState} from 'react'

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
        <input
        type="submit"
        value={name}
        name={name}
        className={Element ? 'ButtonSelect Active' : 'ButtonSelect'}
        onClick={(e)=>{
            handleClick(e)
          }}
        />
    )
}

export default ButtonSelect