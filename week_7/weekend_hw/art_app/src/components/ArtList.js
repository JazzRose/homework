import React from 'react'
import Artwork from './Artwork'

const ArtList = ({artworks, onLovedClick, onAwardedClick, searchTerm}) =>{

    // artworks.shift()

    const artNodes = artworks.filter((artwork)=>{
        if (searchTerm == ""){
            return artwork
        }
            else if (artwork.data.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return artwork
            }
    }
    ).map((artwork,index) => {
        return <Artwork artwork = {artwork} key = {index} onLovedClick = {onLovedClick} onAwardedClick = {onAwardedClick}/>

    })


    return(
        <>
       <ul>
       <div className = "ArtworkList">
        {artNodes}
        </div>
       </ul>
       </>
    )
}

export default ArtList



// // Filters the elements with 
// // price above 100
// const filtered = products.filter(
//     product => product.price > 100)
//     .map (product => {
//         return `the ${product.name} is  ${product.price / 2} pounds`; //return must be in the last chained function
//     });