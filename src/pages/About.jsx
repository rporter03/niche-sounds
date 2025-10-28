import './../css/About.css';

const About = () => {
    return (
        <main id="about">
            <h2>About</h2>
                 <section className="columns about-row">
                    <div className="one about-p">
                        <h3>About</h3>
                        <p>You might be asking yourself right now... "what are niche sounds?" But the question you <em>need</em> to know is, what IS Niche Sounds? Well, I'm here to answer that! Niche Sounds is a cool website where I, as well as other users such as yourself, share cool, unknown songs and artists for anybody to discover!</p>
                    </div>
                    <div className="one about-img">
                        <img src="images/music.jpg" />
                    </div>
                 </section>
                 <section className="columns about-row reverse">
                    <div className="one about-p">
                        <h3>Purpose</h3>
                        <p>My purpose is simply to provide a space where people can share and discover amongst themselves. Niche Sounds is also a place of musical discussion; yap about all of your interests here!</p>
                    </div>
                    <div className="one about-img">
                        <img src="images/music.jpg" />
                    </div>
                 </section>
        </main>
    );
};

export default About;