import './../css/Discover-Artists.css';

const DiscoverArtists = () => {
    return (
        <main id="discover-artists">
            <h2>Discover Artists</h2>
            <div id="forum-search">
                <input type="text" placeholder="Search Genres..."/>
                <button type="submit">Search</button>
            </div>
            <section class="columns discover-row">
                <div class="one">
                    <p>Looking for artists to discover? Search here! Get started by clicking the dropdown menu to search by genre and find the portfolios of artists you've never heard of who make the music you love!</p>
                </div>
                <div class="one">
                    <img src="images/records.webp" alt="Record Stack Image"/>
                </div>
            </section>
            <div>
                <a href="browse-artists.html" class="browse-artists">Click Here to Browse Artists</a>
            </div>
        </main>
    );
};

export default DiscoverArtists;