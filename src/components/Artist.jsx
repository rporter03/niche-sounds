import "../css/House.css";
import {useState} from "react";
import ArtistDialog from "./ArtistDialog";

const Artist = (props) => {
    const [showDialog, setShowDialog] = useState(false);

    const showArtistDetails = () => {
        console.log("hi");
        setShowDialog(true);
    }

    const closeArtistDetails = () => {
        setShowDialog(false);
    }
    return (
        <>
            {showDialog?(
                <ArtistDialog closeArtistDialog={closeArtistDetails} 
                    artist={props.artist}
                    genre={props.genre}
                    description={props.Description}
                    main_image={props.main_image}/>
            ):("")}
            <section className="artist" onClick={showArtistDetails}>
                <img src={"https://server-niche-sounds.onrender.com/images"+props.main_image} alt="artist" />
                <div className="artist-description">
                    <h1>{props.artist}</h1>
                    <p>Genre: {props.genre}</p>
                </div>
            </section>
        </>
    );
};

export default Artist;