import React from "react";
import Suds from "../components/Suds";
import AddSud from "../components/AddSud";
import { useQuery } from '@apollo/client';
import { QUERY_SUDS } from '../utils/queries.js';
import Auth from '../utils/auth'

const Home = (props) => {
    const {
        options = [],
        setOption,
        currentOption,
    } = props;


    const { data } = useQuery(QUERY_SUDS);
    const recipes = data?.sudsFindAll || [];

    return (
        <div>
            {currentOption === options[1] && <AddSud options={options}
                setOption={setOption}
                currentOption={currentOption} />}
            {currentOption === options[0] && <Suds recipes={recipes} />}
        </div>
    );
};

export default Home;