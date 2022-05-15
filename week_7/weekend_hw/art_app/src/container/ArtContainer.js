import React,{useState, useEffect} from 'react'
import ArtList from '../components/ArtList'
import Header from '../components/Header'
import LovedArtworks from '../components/LovedArtworks'
import SortOptions from '../components/SortOptions'

const ArtContainer = () => {

    const[artworks,setArtworks] = useState([])
    const[lovedArtworks, setLovedArtworks] = useState([])
    const[awardedArtworks,setAwardedArtworks] =useState([])
    const[searchTerm,setSearchTerm] = useState("")

    useEffect(() => {
        getArtworks();
      }, [])

    const onLovedClick = (lovedArtwork) => {

    const copyList = [... lovedArtworks]

    const isOnList = copyList.some((artwork) => {
        return artwork.data.id ===lovedArtwork.data.id
    })
    
    if (!isOnList){
     copyList.push(lovedArtwork)
    }

    setLovedArtworks(copyList)

    }

    const onAwardedClick = (awardedArtwork) => {
        const list = [...awardedArtworks]
        const awarded = artworks.filter((artwork) =>{
             return artwork.data.total_awards_received > 0
    })
        if (awarded) {
            list.push(awardedArtwork)}

        setAwardedArtworks(list)
        }
    
    const getArtworks = function(){
        fetch ('https://www.reddit.com/r/art.json')
        .then(res=> res.json())
        .then (artworks => setArtworks(artworks.data.children))

    }

    return(
    <>
    <Header artworks = {artworks} awardedArtworks={awardedArtworks} onAwardedClick = {onAwardedClick} searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}/>
    <div className = 'main_flex'>
        <ArtList artworks = {artworks} onLovedClick = {onLovedClick} searchTerm={searchTerm} setSearchTerm ={setSearchTerm}/> 
        <div className = "lovedList">
        <h2>Love It!</h2>
        <LovedArtworks lovedArtworks = {lovedArtworks}/>
        </div>
    </div>
    </>

    )
}

export default ArtContainer