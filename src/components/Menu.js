import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import './Menu.css';
const menus = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Sản phẩm",
    to: "/product",
    exact: false,
  },
  {
    name: "Danh mục",
    to: "/category",
    exact: false,
  },
];

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
    const active = match ? 'active' : '' ;
  return (
    <li className={`nav-item ${active}`}>
      <Link
        className={` nav-link `}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {/* {match && " (active)"} */}
    </li>
  );
}
export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          React-Router
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
              <CustomLink to="/home">Trang chủ</CustomLink>
              <CustomLink to="/product">Sản phẩm</CustomLink>
              <CustomLink to="/category">Danh mục</CustomLink>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}
