import './../css/Home.css';
import forthWanderers from './../images/forth-wanderers.jpg';
import theStrokes from './../images/the-strokes.jpg';
import battles from './../images/battles.jpg';

const Home = () => {
    return (
        <div id="content">
            <main id="featured-artists">
                <h2>Featured Artists</h2>
                <section class="columns">
                    <div class="artist one">
                        <a href="#">
                            <h3>Forth Wanderers</h3>
                            <p>Alternative, Indie</p>
                            <img src={forthWanderers} alt="Forth Wanderers"/>
                            <p class="artist-link">Visit Artist Portfolio Here</p>
                        </a>
                    </div>
                    <div class="artist one">
                        <a href="https://www.google.com/webhp?authuser=0">
                            <h3>The Strokes</h3>
                            <p>Alternative, Indie, Rock</p>
                            <img src={theStrokes} alt="The Strokes"/>
                            <p class="artist-link">Visit Artist Portfolio Here</p>
                        </a>
                    </div>
                    <div class="artist one">
                        <a href="https://www.google.com/webhp?authuser=0">
                            <h3>Battles</h3>
                            <p>Alternative, Indie</p>
                            <img src={battles} alt="Battles"/>
                            <p class="artist-link">Visit Artist Portfolio Here</p>
                        </a>
                    </div>
                </section>
            </main>
            <main id="featured-forums">
                 <h2>Popular Forum Posts</h2>
                 <div class="forum-post">
                    <h3>Hidden Gems: Underrated Albums That Deserve More Recognition</h3>
                    <p>I've been diving deep into some lesser-known releases lately and found some absolute treasures. There's this incredible album by Crumb called 'Ice Melt' that blends psychedelic indie with jazz influences in the most beautiful way. Also discovered...</p>
                    <a href="https://www.google.com/webhp?authuser=0">Click Here to View Full Post</a>                    
                 </div>
                 <div class="forum-post">
                    <h3>The Revival of Vinyl</h3>
                    <p>Despite streaming being so convenient, I've been building my vinyl collection and there's something magical about the ritual of putting on a record. The large artwork, the liner notes, even the slight imperfections in sound create this intimate listening experience you just can't get...</p>
                    <a href="https://www.google.com/webhp?authuser=0">Click Here to View Full Post</a>                    
                 </div>
            </main>
        </div>
    );
};

export default Home;