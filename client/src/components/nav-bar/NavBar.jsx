import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="nav-bar">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/Rock-Dog-logo-400x265.png"
          alt="logo Rock Dog"
        />
      </Link>
      <ul>
        <li>
          <Link to={"/home"}>HOME</Link>
        </li>
        <li>
          <Link to={"/create"}>CREATE BREED</Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
