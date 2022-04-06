import {Navigate} from 'react-router-dom';
import useAuth from 'hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from 'store/slices/userSlice';
import 'pages/HomePage.css'


function HomePage() {
    const dispatch = useDispatch();

    const {isAuth, email} = useAuth();

    return isAuth? (
        <div className="homepageBody">
            <h1>Welcome</h1>

            <button
                onClick={() => dispatch(removeUser())}
            >Log Out from {email}</button>
        </div>
    ) : (
        <Navigate to='/login' />
    )
}

export default HomePage
