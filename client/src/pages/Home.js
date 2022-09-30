import React from "react";
import Suds from "../components/Suds";
import AddSud from "../components/AddSud";
import { useQuery } from '@apollo/client';
import { QUERY_SUDS } from '../utils/queries.js';

const Home = (props) => {
    const {
        options = [],
        currentOption
    } = props;

    const { data } = useQuery(QUERY_SUDS);
    const recipes = data?.sudsFindAll || [];

    return (
        <div>
            {currentOption === options[1] && <AddSud />}
            {currentOption === options[0] && <Suds recipes={recipes} />}
        </div>
    );
};

export default Home;