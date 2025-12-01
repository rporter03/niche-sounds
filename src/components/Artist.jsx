import {useState} from "react";
import ArtistDialog from "./ArtistDialog";
import ArtistDeleteDialog from "./ArtistDeleteDialog";
import ArtistEditDialog from "./ArtistEditDialog";

const Artist = (props) => {
    const [showDialog, setShowDialog] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [isHidden, setIsHidden] = useState(false); 

    const showArtistDetails = () => {
        console.log("hi");
        setShowDialog(true);
    }

    const closeArtistDetails = () => {
        setShowDialog(false);
    }

    const openEditDialog = () => {
        setShowEditDialog(true);
    }

    const closeEditDialog = () => {
        setShowEditDialog(false);
    }

    const openDeleteDialog = () => {
        setShowDeleteDialog(true);
    }

    const closeDeleteDialog = () => {
        setShowDeleteDialog(false);
    }

    const hideArtist = () => {
        setIsHidden(true);
    }

    return (
        <>
            {showDialog?(
                <ArtistDialog closeArtistDialog={closeArtistDetails} 
                    artist={props.artist}
                    genre={props.genre}
                    description={props.Description}
                    img={props.img}
                    openDeleteDialog={openDeleteDialog}
                    openEditDialog={openEditDialog} />
            ):("")}

            {showEditDialog ? (
                <ArtistEditDialog
                    _id={props.id}
                    artist={props.artist}
                    genre={props.genre}
                    Description={props.Description}
                    img={props.img}
                    closeEditDialog={closeEditDialog}
                    editArtist={props.editArtist} />
            ):("")}
            
            {showDeleteDialog?(
                <ArtistDeleteDialog 
                    closeDeleteDialog={closeDeleteDialog}
                    deleteArtist={() => props.deleteArtist(props.id)}
                    _id={props.id}
                    artist={props.artist} />
            ):("")}

            <section className="artist" onClick={showArtistDetails}>
                <img src={"https://server-niche-sounds.onrender.com/"+props.img} alt="artist" />
                <div className="artist-description">
                    <h3>{props.artist}</h3>
                    <p>{props.genre}</p>
                </div>
            </section>
        </>
    );
};

export default Artist;