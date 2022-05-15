import React from 'react'
import LovedArtwork from './LovedArtwork'

const LovedArtworks = ({lovedArtworks}) =>{

    const lovedArtworkNodes = lovedArtworks.map((artwork,index) => {
        return <LovedArtwork artwork = {artwork} key = {index}/>
    })

    return(
        <>
            <div className = "lovedFlex">
                {lovedArtworkNodes}
            </div>
        </>
    )
}

export default LovedArtworks