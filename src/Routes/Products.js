import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <>
      <div>
        <input placeholder="Search" />
      </div>

      <nav className="link">
        <NavLink to="/products/features" style={navLinkStyle}>
          Features
        </NavLink>
        <NavLink to="/products/new" style={navLinkStyle}>
          New
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
