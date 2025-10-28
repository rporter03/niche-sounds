import './../css/Contact.css';

const Contact = () => {
    return (
        <main id="contact">
            <h2>Contact</h2>
            <section className="columns one">
                <div className="one">
                    <div id="contact-block">
                        <h3>Contact Me!</h3>
                        <p>sampleEmail@email.com</p>
                        <p>(803) 123-4567</p>
                        <p>Instagram: @notyalc._</p>
                    </div>
                </div>
                <div className="slideshow">
                    <img src="images/music-note.svg"/>
                </div>
                <section className="one">
                    <form method="POST" id="contact-form">

                        <input type="hidden" name="access_key" value="4256cc32-1920-4952-a04f-b36af3f147f2"/>

                        <p>
                            <label for="name">Name:</label>
                            <input type="text" name="name" required/>
                        </p>
                        <p>
                            <label for="email">Email:</label>
                            <input type="email" name="email" required/>
                        </p>
                        
                        <label for="message">Message:</label>
                        <textarea name="message" required></textarea>
                            
                        <input type="checkbox" name="botcheck" className="hidden" style="display: none;"/>

                        <p><button type="submit">Submit Form</button></p>

                        <div id="contact-result"></div>
                    </form>
                </section>
            </section>
        </main>
    );
};

export default Contact;