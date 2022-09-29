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

    // const [recipes, setRecipes] = useState(data.sudsFindAll);

    // useEffect(() => {
    //     localStorage.setItem('recipes', setRecipes);
    // }, [recipes]);

    // const recipes = [
    //     {
    //         _id: "63347ea1e9efac7a8c569fd7",
    //         title: "Soap dummy",
    //         user: "oliviamckee",
    //         ingredients: ["lavender", "soap base"],
    //         steps: ["mix all in bowl", "pour into mold"],
    //         createdAt: "9.24.2022",
    //         description: "soap",
    //         image: "soap-recipe-18-5c2a5ad2c9e77c00010d2cb5.webp"
    //     },
    //     {
    //         _id: 2,
    //         title: "Soap dummy2",
    //         user: "oliviamckee",
    //         ingredients: ["oatmeal", "soap base"],
    //         steps: ["mix all in bowl", "pour into mold"],
    //         createdAt: "9.24.2022",
    //         description: "soap",
    //         image: "soap-recipe-18-5c2a5ad2c9e77c00010d2cb5.webp"
    //     },
    //     {
    //         _id: 3,
    //         title: "Soap dummy3",
    //         user: "oliviamckee",
    //         ingredients: ["honey", "soap base"],
    //         steps: ["mix all in bowl", "pour into mold"],
    //         createdAt: "9.24.2022",
    //         description: "soap",
    //         image: "soap-recipe-18-5c2a5ad2c9e77c00010d2cb5.webp"
    //     },
    // ]

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