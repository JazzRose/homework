import React from 'react'

const SongItem = ({song, index}) =>  {


    return <li> 
                <h2>{index + 1}</h2>
                <b>{song['im:name'].label}</b>
                <br/><img src = {song['im:image'][2].label} alt ="Song Image"/>
                <br/>Artist:{song['im:artist'].label}
                <br/>Genre:{song.category.attributes.label}

            </li>
    
}

export default SongItem
