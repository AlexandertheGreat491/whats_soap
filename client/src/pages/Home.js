import React, { useState } from "react";
import Suds from "../components/Suds";
import AddSud from "../components/AddSud";
import { useQuery } from '@apollo/client';
import { QUERY_SUDS } from '../utils/queries.js';

const Home = () => {
    const [options] = useState([
        { name: "View Suds" },
        { name: "Add" }
    ]);
    const [currentOption, setOption] = useState(options[0]);

    const { data } = useQuery(QUERY_SUDS);
    const recipes = data?.sudsFindAll || [];

    return (
        <div>
            <nav id="nav">
                {options.map((option) => (
                    <button key={option.name}>
                        <span onClick={() => setOption(option)}>
                            {option.name}
                        </span>
                    </button>
                ))}
            </nav>
            {currentOption === options[1] && <AddSud />}
            {currentOption === options[0] && <Suds recipes={recipes} />}
        </div>
    );
};

export default Home;