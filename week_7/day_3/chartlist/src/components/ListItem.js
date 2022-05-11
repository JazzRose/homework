import React from 'react'

const SongItem = ({song, index}) =>  {


    return <li><b>{song['im:name'].label}</b>
                <br></br><h2>{index}</h2>
                <br></br><img src = {song['im:image'][2].label} alt ="Song Image"/>
                <br></br>Artist:{song['im:artist'].label}
                <br></br>Genre:{song.category.attributes.label}

                </li>
    
}

export default SongItem
