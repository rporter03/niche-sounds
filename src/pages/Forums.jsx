import './../css/Forums.css';

const Forums = () => {
    return (
        <main id="forums">
            <h2>Forums</h2>
            <div id="forum-search">
                <input type="text" placeholder="Search forums..."/>
                <button type="submit">Search</button>
            </div>
                <div id="forum-container">
                <div id="forum-header">
                    <div>Topic</div>
                    <div>Posts</div>
                    <div>Views</div>
                    <div>Last Post</div>
                </div>
                <div class="forum-row">
                    <div>
                        <a href="#" class="post-title">The Revival of Vinyl</a>
                    </div>
                    <div class="count">1</div>
                    <div class="count">1</div>
                    <div class="last-post">
                        <p>By annoyedwatermelon224</p>
                        <p>Just Now</p>
                    </div>
                </div>
                <div class="forum-row">
                    <div>
                        <a href="#" class="post-title">What's your favorite band/artist?</a>
                    </div>
                    <div class="count">3</div>
                    <div class="count">6</div>
                    <div class="last-post">
                        <p>By annoyedwatermelon224</p>
                        <p>2 min ago</p>
                    </div>
                </div>
                <div class="forum-row">
                    <div>
                        <a href="#" class="post-title">Hidden Gems: Underrated Albums That Deserve More Recognition</a>
                    </div>
                    <div class="count">9</div>
                    <div class="count">17</div>
                    <div class="last-post">
                        <p>By flaffonyfantano19</p>
                        <p>1 hour ago</p>
                    </div>
                </div>
                <div class="forum-row">
                    <div>
                        <a href="#" class="post-title">The Most Overated Genre...</a>
                    </div>
                    <div class="count">5</div>
                    <div class="count">11</div>
                    <div class="last-post">
                        <p>By ILoveTheColorRed</p>
                        <p>2 hours ago</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Forums;