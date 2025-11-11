import {useState, useEffect} from "react";
import axios from "axios";
// import css
import ArtistList from "../components/ArtistList";

const Artists = () => {
    return (
        <main id="artists" className="main-content">
            <h2>Browse Artists</h2>
            <ArtistList num="9" />
        </main>
    )
};

export default Artists;