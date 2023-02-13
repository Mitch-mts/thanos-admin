import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [username, SetUsername] =  useState('')
    const [password, setPassword] = useState('')

    const loginHandler = (e) => {
        navigate('/')
    }

    const handleUsernameChange = (e) => {
        SetUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="login-body">
            <div className="login-panel"></div>

            <div className="login-content">
                <img src="assets/layout/images/thanos5.png" alt="babylon-layout" />

                <h1>
                    <span>WELCOME TO THANOS ADMIN</span> 
                </h1>
                <p>Please use the form to sign-in.</p>

                <div className="login-input-wrapper">
                    <InputText placeholder="Username" type='text' value={username} onChange={handleUsernameChange} />
                    <i className="pi pi-user"></i>
                </div>

                <div className="login-input-wrapper">
                    <InputText placeholder="Password" type='password' value={password} onChange={handlePasswordChange}/>
                    <i className="pi pi-lock"></i>
                </div>

                <Button
                    label="Sign In"
                    onClick={(e) => loginHandler(e)}
                />
            </div>
        </div>
    );
};
