import React from 'react'

const Artwork = ({artwork, onLovedClick}) => {

    const handleLovedClick = () => {
        onLovedClick(artwork)
    }

    return(

        <li className ="ArtworkTile">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className = "tileimg" src={artwork.data.url} onError={(e)=>{e.target.onerror = null; e.target.src="https://www.cowlingandwilcox.com/blog/wp-content/uploads/2019/08/Cover.jpg"}} alt = {artwork.data.title} width = "300" height = "300"/>
                    </div>
                    <div class="flip-card-back">
                        <h2>{artwork.data.author}</h2>
                        <h1>{artwork.data.title}</h1>
                        <p><img src = "https://www.redditstatic.com/desktop2x/img/gold/badges/award-gold-large.png" height = "30px" width = "30px"/>: {artwork.data.total_awards_received} </p> 
                    </div>
                </div>
            </div>
            <div>
                <button className = "button" value = {artwork} onClick={handleLovedClick}>Love it</button>
            </div>
            
        </li>
    )
}

export default Artwork