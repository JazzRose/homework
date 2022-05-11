import React from 'react'
import SongItem from './ListItem'

const SongList = ({songs}) => {

    const songsItems = songs.map((song,index) => {
        return <SongItem song = {song} key = {index}/>
    })

    return (

        <ol>
           {songsItems} 
        </ol>
    )
}

export default SongList