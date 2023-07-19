import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../styles/Layout.css";
import { userMenu } from "./Menus/UserMenu";

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const sidebarMenu = userMenu;

  //logout handler
  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logout Successfully");
    navigate("/login");
  };

  const userName = localStorage.getItem("userName");

  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <h6>JOB PORTAL</h6>
        </div>
        <hr />
        <p className="text-center text-warning">Welcome: {userName}</p>
        <hr />
        <div className="menu">
          {sidebarMenu.map((menu) => {
            const isActive = location.pathname === menu.path;
            return (
              <div className={`menu-item ${isActive && "active"}`} key={menu.name}>
                <i className={menu.icon}></i>
                <Link to={menu.path} className="menu-link">
                  {menu.name}
                </Link>
              </div>
            );
          })}
          <div className={`menu-item `} onClick={handleLogout}>
            <i className="fa-solid fa-right-from-bracket"></i>
            <Link to="/login" className="menu-link">
              Logout
            </Link>
          </div>
        </div>
      </div>

      <div className="content">{children}</div>
    </>
  );
};

export default Layout;
