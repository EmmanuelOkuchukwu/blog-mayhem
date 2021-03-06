import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../Redux/Actions/postsAction';
import { getUser } from '../../Redux/Actions/userAction';
import { AuthService } from "../../Service/AuthService";

const MainNav = ({user}) => {
    const dispatch = useDispatch();
    // const userData = useSelector(state => state.userData);
    const history = useHistory();

    // useEffect(() => {
    //     dispatch(userData());
    // },[dispatch])
    //
    // const { user } = userData;

    const handleSignout = (evt) => {
        evt.preventDefault();
        AuthService.onSignout()
        history.push('/');
    }


    return(
        <div className="nav">
            <ul style={{display: 'flex'}}>
                <h1>KingdomCome</h1>
            </ul>
            <ul>
                <li style={{display: 'flex', alignItems: 'center'}}>
                    <a href="#"><i className="fas fa-bell fa-2x" /></a>{' '}
                    <Link to="/account" className="profile-link">{user.name}</Link>
                    <a className="signout-link" href="" onClick={handleSignout}><i className="fas fa-sign-out-alt" /></a>
                </li>
            </ul>
        </div>
    );
}

export default MainNav;
