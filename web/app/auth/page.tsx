'use client';
import React, { useState, useEffect } from 'react';
import { TextField, Button, CircularProgress, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { User } from '@models/userModel';
import { bg, text } from '../../constants/colors';

const SignInForm = ({ onSwitch }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignIn = async () => {
        try {
            setLoading(true);
            const res = await axios.post('/api/user/signin', { email, password });
            const user: User = res.data;
            localStorage.setItem('user', JSON.stringify(user));
            router.push('/start');
        } catch (error) {
            setError(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    const isSignInDisabled = !email || !password || loading;

    return (
        <>
            <Stack gap="1rem">
                <TextField label="Email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <TextField label="Password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <Button disabled={isSignInDisabled} variant="contained" size="large" onClick={onSignIn}>
                    {loading ? <CircularProgress size={24} /> : 'Sign In'}
                </Button>
                {error && <Typography color="error">{error}</Typography>}
                <Typography
                    sx={{
                        color: 'blueviolet',
                        alignSelf: 'flex-end',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        ':hover': {
                            textDecoration: 'underline',
                        },
                    }}
                >
                    Recovery Password
                </Typography>
            </Stack>
            <Stack flexDirection="row" justifyContent="center" alignItems="center">
                <Typography color={text}>Don't have an account yet?</Typography>
                <Button
                    onClick={onSwitch}
                    sx={{
                        cursor: 'pointer',
                        ':hover': {
                            textDecoration: 'underline',
                            backgroundColor: 'transparent',
                        },
                        textTransform: 'none',
                        color: 'blueviolet',
                        fontWeight: 700,
                    }}
                >
                    Sign up
                </Button>
            </Stack>
        </>
    );
};

const SignUpForm = ({ onSwitch }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onSignUp = async () => {
        try {
            setLoading(true);
            const res = await axios.post('/api/user/signup', { email, username, password });
            const user: User = res.data;
            localStorage.setItem('user', JSON.stringify(user));
            router.push('/start');
        } catch (error) {
            setError(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    const isSignUpDisabled =
        !email || !username || !password || !confirmPassword || password !== confirmPassword || loading;

    return (
        <>
            <Stack gap="1rem">
                <TextField label="Email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <TextField label="Username" type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
                <TextField label="Password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <TextField
                    label="Confirm Password"
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    error={password !== confirmPassword}
                />
                {error && <Typography color="error">{error}</Typography>}
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        mt: '1rem',
                    }}
                    disabled={isSignUpDisabled}
                    onClick={onSignUp}
                >
                    {loading ? <CircularProgress /> : 'Sign up'}
                </Button>
            </Stack>
            <Stack flexDirection="row" justifyContent="center" alignItems="center" gap="0.5rem">
                <Typography color={text}>Already have an account?</Typography>
                <Button
                    onClick={onSwitch}
                    sx={{
                        cursor: 'pointer',
                        ':hover': {
                            textDecoration: 'underline',
                            backgroundColor: 'transparent',
                        },
                        textTransform: 'none',
                        color: 'blueviolet',
                        fontWeight: 700,
                    }}
                >
                    Sign in
                </Button>
            </Stack>
        </>
    );
};

const AuthPage = () => {
    const [isSignIn, setSignIn] = useState(true);

    const handleSwitch = () => {
        setSignIn(!isSignIn);
    };

    return (
        <Stack
            sx={{
                height: '100vh',
                backgroundColor: bg,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: {
                    xs: 'column',
                    md: 'row',
                },
                gap: '2rem',
            }}
        >
            <Stack>
                <Typography variant="h3" fontWeight={700} color={text}>
                    Reading Advantage
                </Typography>
                <Typography variant="h6" color={text} textAlign={{ xs: 'center', md: 'left' }}>
                    Extensive reading app incorporating AI.
                </Typography>
            </Stack>
            <Stack
                sx={{
                    minWidth: '360px',
                    minHeight: '300px',
                    backgroundColor: 'white',
                    boxShadow: 4,
                    borderRadius: '0.5rem',
                    padding: '1rem',
                    justifyContent: 'space-between',
                }}
            >
                {isSignIn ? <SignInForm onSwitch={handleSwitch} /> : <SignUpForm onSwitch={handleSwitch} />}
            </Stack>
        </Stack>
    );
};

export default AuthPage;
