import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SUD_USERNAME } from '../utils/queries';

import Suds from "../components/Suds";

const Profile = () => {
  const { username } = useParams();
  const { data } = useQuery(QUERY_SUD_USERNAME, {
    variables: { username: username },
  });

  const recipe = data?.suds || [];

  return (
    <div>
      <br></br>
      <h2 id="profileheader">Viewing {`${username}'s`} profile</h2>
      <Suds recipes={recipe} />
    </div>
  );
};

export default Profile;
