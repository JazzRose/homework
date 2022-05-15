import React from 'react'

const LovedArtwork = ({artwork}) =>{

return(
    <>
    <div className = "lovedTile">
    <img  className = "thumbnail" src = {artwork.data.thumbnail}/>
    <a href = {"https://www.reddit.com" + artwork.data.permalink}>Discuss</a>
    </div>
    </>

)

}
export default LovedArtwork