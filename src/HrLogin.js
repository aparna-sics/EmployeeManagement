import React, { useState } from 'react'
import './Hrlogin.css'
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import './RegistrationForm.js';

function HrLogin() {




    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        // Perform authentication logic here
        // For simplicity, let's check for hardcoded credentials
        if (username === 'manish' && password === 'manish@9030') {
            setLoggedIn(true);
        } else {
            alert('Invalid username or password');
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername('');
        setPassword('');
    };
    return (
        <div className='maindiv'>
            <div>
                <nav>
                    <a href="RegistrationForm">Home</a>
                    <h6>Contact</h6>
                    <h6>Careers</h6>

                </nav>
            </div>


            <div className='Loginbox'>
                
                <div>
                    {loggedIn ? (
                        <div>
                            <h2>Welcome, {username}!</h2>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <div>
                            <h2> Hr Login</h2>
                            <div>
                                <label>Username:</label>
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div>
                                <label>Password:</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button onClick={handleLogin}>Login</button>
                        </div>
                    )}
                </div>

            </div>
        </div>

    )
}

export default HrLogin