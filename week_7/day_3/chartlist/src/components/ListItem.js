import React from 'react'

const SongItem = ({song}) =>  {


    return <ul><li><b>{song['im:name'].label}</b>
                <br></br><img src = {song['im:image'][2].label} alt ="Song Image"/>
                <br></br>Artist:{song['im:artist'].label}
                <br></br>Genre:{song.category.attributes.label}

                </li>
            </ul>
    
}

export default SongItem
