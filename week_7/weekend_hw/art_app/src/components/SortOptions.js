import React from 'react'

const SortOptions = ({onAwardedClick, setSearchTerm}) => {

    return(
        <>
        <button className = "button" onclick = {onAwardedClick}>Only Show Awarded Art</button>

        <input type = "text" placeholder = "Search by type" onChange = {(event) => {
            setSearchTerm(event.target.value)
        }}/>
        </>
    )
}

export default SortOptions