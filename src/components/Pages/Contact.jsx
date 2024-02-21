import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import resume from "../../assets/pdf/resume.pdf" 
import Footer from '../Footer';


const Contact = () => {

      // Define state for form fields
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
    });

  // Event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        // Clear form fields after submission (optional)
        setFormData({
        name: '',
        email: '',
        message: ''
        });
    };

  // Event handler for form field changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
    }));
    };

    return (
    <>
        <h1>Contact me here!</h1>

        <section className="page-section" id="contact">
            <div>

                <div id="contactSection2">
                    <ul className="contactList">
                        <li className="contactLink"><a href="tel:+447784779825">+447784779825</a></li>
                        <li className="contactLink"><a href="mailto:andrea.melisa.martinez.dearth@gmail.com">Email</a></li>
                        <li className="contactLink"><a href="https://github.com/Andrea-Melisa" target="_blank">GitHub</a></li>
                        <li className="contactLink"><a href="https://www.linkedin.com/in/andrea-melisa-mart%C3%ADnez-dearth-66a46941/" target="_blank">LinkedIn</a></li>
                        <li className="contactLink"><a href={resume} target="_blank">Resume/ CV</a></li>
                    </ul>
                </div>
            </div>
        </section>


        <p>If you're interested in <span>working with me</span> or <span>have any questions,</span> please don't hesitate to contact me. I will be pleased to receive your message! </p>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
        />
        </Form.Group>

        <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
        />
        </Form.Group>

        <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
        />
        </Form.Group>

        <Button variant="primary" type="submit">
        Submit
        </Button>
    </Form>

    <Footer />
    </>
    )
}

export default Contact;
