import "../css/Dialog.css";
import React, {useState} from "react";

const AddArtist = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            setPrevSrc(URL.createObjectURL(event.target.files[0]));
        }
    };

    const addToServer = async(event) => {
        event.preventDefault(); 
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log(...formData);
        
        const response = await fetch("https://server-niche-sounds.onrender.com/api/artists", {
            "method":"POST",
            "body":formData
        });

        if(response.status == 200){
            setResult("Artist added successfully");
            event.target.reset();
            props.closeAddDialog();
            props.updateArtists(await response.json());
        } else {
            setResult("Error adding artist");
        }
    };

    return (
        <div id="add-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeAddDialog}>&times;</span>
                    <form id="add-artist-form" onSubmit={addToServer}>
                        <h3>Add an Artist</h3>
                        <p>
                            <label htmlFor="artist">Artist Name:</label>
                            <input type="text" id="artist" name="artist" required minLength="3"></input>
                        </p>
                        <p>
                            <label htmlFor="genre">Genre:</label>
                            <input type="text" id="genre" name="genre" required minLength="3"></input>
                        </p>
                        <p>
                            <label htmlFor="Description">Description:</label>
                            <textarea id="Description" name="Description" required minLength="10"></textarea>
                        </p>
                        <section className="columns">
                            <div>
                                <p id="img-prev-section">
                                    {prevSrc!=""?
                                    (<img id="img-prev" src={prevSrc}></img>):
                                    ("")
                                    }
                                </p>
                            </div>
                            <p id="img-upload">
                                <label htmlFor="img">Upload Image:</label>
                                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
                            </p>
                        </section>
                        <p>
                            <button type="submit">Submit</button>
                        </p>
                        <p>{result}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddArtist;