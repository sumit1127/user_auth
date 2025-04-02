import { NavLink } from "react-router-dom";
import styles from "./styles.css";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <div className="flex">
      <NavLink style={navLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyle} to="/products">
        Products
      </NavLink>
    </div>
  );
};

export default Navbar;
