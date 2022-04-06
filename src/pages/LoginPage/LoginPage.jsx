import Login from 'components/Login';
import { Link } from "react-router-dom";
import 'pages/LoginPage/LoginPage.css'

const LoginPage = () => {
    return (
        <div className='sign-up'>
            <div className='block'>
            </div>
            <div className='login'>
                <div className='header'>
                    <h1>Авторизация</h1>
                </div>
                <div>
                    <Login />
                </div>
                
                
                {/* <p>
                    Or <Link to='/register'>Register</Link>
                </p> */}
            </div>
        </div>
    )
}

export default LoginPage