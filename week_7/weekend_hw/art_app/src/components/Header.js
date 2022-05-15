import React from 'react'
import SortOptions from './SortOptions'


const Header = ({onAwardedClick,setSearchTerm}) =>{

    return(
        <>
        <img className = "logo" src = "https://www.masterdrawingsnewyork.com/wp-content/uploads/2020/01/1AN-Logo-Colour-300x166.png" height = "150"/>
        <SortOptions onAwardedClick={onAwardedClick} setSearchTerm = {setSearchTerm}/>
        </>
    )
}


export default Header