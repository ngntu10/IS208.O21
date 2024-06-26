/* eslint-disable no-unused-vars */
import React from "react";
import "./header.css";
import Logo from "../../../../images/mountain.png";
import { NavLink } from "react-router-dom";
import { getCookie } from "../../../../helpers/cookie";
import { useSelector } from "react-redux";

const Header = (props) => {
  const navLinkActive = (e) => {
    return e.isActive ? "menu_link active" : "menu_link";
  };
  const token = getCookie("token");
  const isLogin = useSelector((state) => state.loginReducer);
  console.log(isLogin);

  return (
    <>
      <div className="header">
        <div className="navbar">
          <img src={Logo} alt="logo" className="logo" />
          <h1 className="name">ELEVEN</h1>
          <ul>
            {token && (
              <ul>
                <li>
                  <NavLink to="/admin/homepage" className={navLinkActive}>
                    Tin tức chung
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/dispatch" className={navLinkActive}>
                    Chuyển yêu cầu
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/dashboard" className={navLinkActive}>
                    Quản lý nhân viên
                  </NavLink>
                </li>
              </ul>
            )}
            <li>
              {token ? (
                <>
                  <NavLink to="/logout" className="logout">
                    Đăng xuất
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/login" className="login">
                    Đăng nhập
                  </NavLink>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
