import React, { useState } from "react";
import RecipeList from "../components/RecipeList";
import AddSud from "../components/AddSud";

const Home = () => {
    const [options] = useState([
        { name: "View Suds" },
        { name: "Add" }
    ]);

    const [currentOption, setOption] = useState(options[0]);

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
            {currentOption === options[0] && <RecipeList />}
        </div>
    );
};

export default Home;