import "./../css/Dialog.css";

const ArtistDialog = (props) => {
    return (
        <div id="artist-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeArtistDialog}
                    >
                        &times;
                    </span>
                    <div className="columns">
                        <img src={"https://server-niche-sounds.onrender.com/"+props.img} alt="artist" />
                        <div id="dialog-content">
                            <h3>{props.artist}</h3>
                            <p>Genre: {props.genre}</p>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtistDialog;