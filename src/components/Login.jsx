import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Form from 'components/Form';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {setUser} from 'store/slices/userSlice';


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
            .catch(() => alert('Invalid user!'))
    }

  return (
    <Form 
        title="Вход"
        handleClick={handleLogin}
    />
  )
}

export default Login