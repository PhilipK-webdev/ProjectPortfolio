import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import axios from "axios";
const FormRequest = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const submitRequest = async (e) => {
        e.preventDefault();
        const obj = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        }
        const response = axios({
            method: 'POST',
            url: "/send",
            data: obj
        });
        response.then(res => console.log(res)).catch(err => console.log(err));
    };

    return (
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12">
                        <form onSubmit={submitRequest}>
                            <h3 className="display-3">Contact</h3>
                            <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                                success="right" name="name"
                                onChange={e => setName(e.target.value)}
                                value={name}
                                required />
                            <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                                success="right" type="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                required />
                            <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right"
                                success="right" type="text"
                                onChange={e => setSubject(e.target.value)}
                                value={subject}
                                required />
                            <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt"
                                success="right"
                                onChange={e => setMessage(e.target.value)}
                                value={message}
                                required />
                            <MDBBtn color="primary" type="submit">
                                Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
                            </MDBBtn>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>

    );
};

export default FormRequest;


