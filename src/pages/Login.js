import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="login-body">
            <div className="login-panel"></div>

            <div className="login-content">
                <img src="assets/layout/images/logo-black.png" alt="babylon-layout" />

                <h1>
                    <span>SIGN IN</span> TO BABYLON
                </h1>
                <p>Welcome, please use the form to sign-in.</p>

                <div className="login-input-wrapper">
                    <InputText placeholder="Username" />
                    <i className="pi pi-user"></i>
                </div>

                <div className="login-input-wrapper">
                    <InputText placeholder="Password" />
                    <i className="pi pi-lock"></i>
                </div>

                <Button
                    label="Sign In"
                    onClick={() => {
                        navigate('/');
                    }}
                />
            </div>
        </div>
    );
};
