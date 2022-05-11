import React,{useEffect, useState} from 'react'
import SongList from '../components/SongList'

const ChartContainer = () => {

    const [songs,setSongs] = useState([])

    useEffect(() => {
        loadSongs();
    }, [])

    const loadSongs = function() {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
          .then(res => res.json())
          .then(songsList => setSongs(songsList.feed.entry))
          .catch(err => console.error);
      }

    return (

    <div>
        <h1>Top 20 Charts</h1>
        <SongList songs={songs}/>
    </div>
    )
}

export default ChartContainer