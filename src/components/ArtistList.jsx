import {useState, useEffect} from "react";
import axios from "axios";
import Artist from "../components/Artist";
import AddArtist from "../components/AddArtist";

const ArtistList = (props) => {
    const [artists, setArtists] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    const openAddDialog = () => {
        setShowAddDialog(true);
    }

    const closeAddDialog = () => {
        console.log("Calling close method")
        setShowAddDialog(false);
    }

    const updateArtists = (artist) => {
        setArtists((artists)=>[...artists, artist]);
    };

    //after page has loaded
    useEffect(()=>{
        const loadArtists = async() => {
            const response = await axios.get("https://server-niche-sounds.onrender.com/api/artists");
            setArtists(response.data.splice(0,props.num));
        };

        loadArtists();
    },[]);

    return (
        <>
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
            <button id="add-artist" onClick={openAddDialog}>Add a New Artist</button>

            {showAddDialog ? (
                <AddArtist 
                    closeAddDialog={closeAddDialog} 
                    updateArtists={updateArtists}
                />
            ) : ("")}
        </>
    )
};

export default ArtistList;