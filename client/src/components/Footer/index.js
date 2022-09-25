import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <p>Thanks for visiting!</p>
            <p>Check out our Github profiles:</p>
            <div>
                <a href="https://github.com/AlexandertheGreat491">
                    <FaGithub /> Alexander Van Dyke
                </a> <br></br>
                <a href="https://github.com/NickSchenck">
                    <FaGithub /> Nick Schenck
                </a> <br></br>
                <a href="https://github.com/willig0203">
                    <FaGithub /> Gary Williams
                </a> <br></br>
                <a href="https://github.com/oliviamckee">
                    <FaGithub /> Olivia McKee
                </a>
            </div>
        </footer>
    );
};

export default Footer;