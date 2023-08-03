import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./submenu.scss";

const SubMenu = ({ subMenuItems, parentRef }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = () => {
      const parentRect = parentRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const subMenuElement = document.querySelector(".submenu-popup");
      const subMenuHeight = subMenuElement.offsetHeight;

      let topPosition = parentRect.bottom - subMenuHeight;
      let leftPosition = parentRect.right + 1;

      if (topPosition < 0) {
        topPosition = parentRect.bottom;
      }

      setPosition({
        top: topPosition,
        left: leftPosition,
      });
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, [parentRef]);

  return (
    <ul
      className="submenu-popup"
      style={{
        position: "fixed",
        top: position.top,
        left: position.left,
      }}
    >
      {subMenuItems.map((subItem) => (
        <li key={subItem.id}>
          <NavLink to={subItem.path}>{subItem.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
