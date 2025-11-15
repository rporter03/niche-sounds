import {useState, useEffect} from "react";
import axios from "axios";
// import css here
import Artist from "../components/Artist";

const ArtistList = (props) => {
    const [artists, setArtists] = useState([]);

    //after page has loaded
    useEffect(()=>{
        const loadArtists = async() => {
            const response = await axios.get("https://server-niche-sounds.onrender.com/api/artists");
            setArtists(response.data.splice(0,props.num));
        };

        loadArtists();
    },[]);

    return (
        <div id="artist-list" className="columns">
            {artists.map((artist)=>(
                <Artist key={artist._id} 
                        id={artist._id}
                        artist={artist.artist} 
                        genre={artist.genre}
                        Description={artist.Description} 
                        img={artist.img} />
            ))}
        </div>
    )
};

export default ArtistList;