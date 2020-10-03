import React, { useState } from 'react';
import axios from "axios";
const FormRequest = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submitRequest = async (e) => {
        e.preventDefault();
        const obj = {
            email: email,
            message: message
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
            <form onSubmit={submitRequest}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" type="text"
                        name="email"
                        placeholder="Email Address"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        required />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <textarea type="text" className="form-control" name="message"
                        type="text"
                        placeholder="Tell us your purpose"
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                        required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default FormRequest;