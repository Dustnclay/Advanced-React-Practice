import React from 'react'
import {useDarkMode} from '../hooks/useDarkMode'

const Nav = (props) => {
    const [darkMode,setDarkMode] = useDarkMode('darkMode',false)
    const clickEvent = (e) => {
        e.preventDefault()
        setDarkMode(!darkMode)
    }

    return(
        <>
        <h1 className = 'nav-title'>Futbol</h1>
        <button onClick={clickEvent}>Dark</button> 
        </>
    ) 
}

export default Nav