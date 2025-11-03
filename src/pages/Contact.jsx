import './../css/Contact.css';
import {useState} from 'react';

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...")
    const formData = new FormData(event.target);

    formData.append("access_key", "4256cc32-1920-4952-a04f-b36af3f147f2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
        console.log("Success", res);
        setResult("Email Successfully Sent")
        event.target.reset(); // reset form fields
    } else {
        console.log("Error sending email", res);
        setResult("Error Sending Email");
    }
    };

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
                    <img src="images/music-note.svg" alt="Music Note Picture"/>
                </div>
                <section className="one">
                    <form onSubmit={onSubmit} id="contact-form">

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
                            
                        <input type="checkbox" name="botcheck" className="hidden"/>

                        <p><button type="submit">Submit Form</button></p>

                        <div id="contact-result"></div>
                        <span>{result}</span>
                    </form>
                </section>
            </section>
        </main>
    );
};

export default Contact;