import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="d-inline-flex mt-2">
      <p className="m-2">Thanks for visiting!</p>
      <p className="m-2">Check out our Github profiles:</p>
      <div className="d-inline-flex">
        <a className="m-2" href="https://github.com/AlexandertheGreat491">
          <FaGithub /> Alexander Van Dyke
        </a>{" "}
        <br></br>
        <a className="m-2" href="https://github.com/NickSchenck">
          <FaGithub /> Nick Schenck
        </a>{" "}
        <br></br>
        <a className="m-2" href="https://github.com/willig0203">
          <FaGithub /> Gary Williams
        </a>{" "}
        <br></br>
        <a className="m-2" href="https://github.com/oliviamckee">
          <FaGithub /> Olivia McKee
        </a>
      </div>
    </footer>
  );
};

export default Footer;
