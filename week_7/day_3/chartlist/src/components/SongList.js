import React from 'react'
import SongItem from './ListItem'

const SongList = ({songs}) => {

    const songsItems = songs.map((song,index) => {
        return <SongItem song = {song} index = {index}/>
    })

    return (

        <ul>
           {songsItems} 
        </ul>
    )
}

export default SongList