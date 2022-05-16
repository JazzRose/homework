import React from 'react'

const SortOptions = ({onAwardedClick, setSearchTerm}) => {

    const handleAwardedButtonClick = () =>{
        onAwardedClick()
    }

    return(
        <>
        <button className = "button" onClick = {handleAwardedButtonClick}>Only Show Awarded Art</button>

        <input type = "text" placeholder = "Search by type" onChange = {(event) => {
            setSearchTerm(event.target.value)
        }}/>
        </>
    )
}

export default SortOptions