import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const createUser = (e) => {

        e.preventDefault();
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    };

    return (
        <form onSubmit={createUser}>

            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Create User" />
            <h2>Your input Data</h2>
            <p>First Name {firstName}</p>
            <p>Last Name {lastName}</p>
            <p>Email {email}</p>
            <p>Password {password}</p>
            <p>Confirm Password {password}</p>
        </form>
    );

};

export default Form;
