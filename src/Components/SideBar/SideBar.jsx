import React, { useState, useRef } from "react";
import "./SideBar.css";
import { useLocation, useNavigate } from "react-router-dom";
import sideBarVal from "./sideBarVal";
import SubMenu from "../SubMenu/SubMenu";

export default function SideBar() {
  const location = useLocation();
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);
  const hoveredItemRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div className="side-div">
      <div className="img-cont">
        <img
          src="https://icon2.cleanpng.com/20171221/kyw/college-school-logo-label-5a3c30dfba1cf7.4870595615138941117623.jpg"
          alt="Image description"
        />
        <h2>XYZ School</h2>
      </div>
      {sideBarVal.map((item, index) => {
        const isActiveLink = item.path === location.pathname; 

        return (
          <li
            key={index}
            ref={hoveredItemIndex === index ? hoveredItemRef : null}
            onMouseOver={() => setHoveredItemIndex(index)}
            onMouseLeave={() => setHoveredItemIndex(null)}
          >
            <div
              onClick={item.path && (() => navigate(`${item.path}`))}
              className={`nav nav-items ${isActiveLink ? "active-link" : ""}`}
              style={{
                position: "relative",
              }}
            >
              <div className="nav-items-sub">
                {item.icon1}
                <p>{item.name}</p>
              </div>
              {item.icon2}
            </div>

            {item.subMenu && hoveredItemIndex === index && (
              <SubMenu subMenuItems={item.subMenu} parentRef={hoveredItemRef} />
            )}
          </li>
        );
      })}
      {console.log(hoveredItemIndex)}
    </div>
  );
}
