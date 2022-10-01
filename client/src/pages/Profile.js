import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

import Suds from "../components/Suds";


const Profile = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });

    const user = data?.me || data?.user || {};

    console.log(user);

    // navigate to personal profile page if username is the logged-in user's
    const navigate = useNavigate();
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        navigate("/profile");
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this page. Use the navigation links above to sign up or log in!
            </h4>
        );
    }

    return (
        <div>
            <h2>Viewing {userParam ? `${user.username}'s` : 'your'} profile.</h2>
            <Suds suds={user.suds} />
        </div>
    );
};

export default Profile;