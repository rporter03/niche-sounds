import React, { useState } from "react"

const ArtistDeleteDialog = (props) => {
    const [result, setResult] = useState("");

    const deleteArtist = async() => {
        const response = await fetch(`https://server-niche-sounds.onrender.com/api/artists/${props._id}`, {
            method:"DELETE"
        });
        
        if(response.status == 200) {
            setResult("Artist successfully deleted");
            props.closeDeleteDialog();
            props.deleteArtist();
        } else {
            setResult("Sorry, we couldn't delete the artist");
        }
    };

    return (
        <div id="delete-dialog" className="w3-modal"> 
            <div className="w3-modal-content"> 
                <div className="w3-container"> 
                    <span className="w3-button w3-display-topright" onClick={props.closeDeleteDialog}>&times;</span>
                    <h3>Are you sure you want to delete {props.artist}?</h3>
                    <section>
                        <button onClick={deleteArtist}>Yes</button>
                        <button onClick={props.closeDeleteDialog}>No</button>
                    </section>
                    <span>{result}</span>
                </div> 
            </div> 
        </div> 
    );
};

export default ArtistDeleteDialog;