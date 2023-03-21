import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../graphql/mutation';
import { useNavigate } from 'react-router-dom';
import styles from './GridView.module.css'


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, { loading, error }] = useMutation(LOGIN_MUTATION);
    const navigate = useNavigate()
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const { data } = await login({ variables: { username, password } });
            localStorage.setItem('token', data.tokenAuth.token);

            // Redirect to dashboard or homepage
            navigate("profile")

        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.loginHeading}>Login</h2>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <div className={styles.loginUsernameContainer}>
                    <label htmlFor="" className={styles.loginLabel}>Username</label>
                    <input
                        className={styles.loginInput}
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />

                </div>
                <div className={styles.loginpasswordContainer}>
                    <label htmlFor="password" className={styles.loginLabel}>Password</label>
                    <input
                        className={styles.loginInput}
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button className={styles.loginButton} type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Login'}
                </button>
                {error && <div className={styles.loginMsgs}>{error.message}</div>}
            </form>
        </div>
    );
};

export default Login;
