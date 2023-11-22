import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import csstyle from "./index.module.scss";
import { Link } from "react-router-dom";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import { Value } from "sass";
import SidebarItem from "./SidebarItem"
import items from "./menu.json"
function LeftMenu() {


  return (
    <>
      <div className={csstyle.sidebar}>
        <div className="sidebar">
          {items.map((item, index) => <SidebarItem key={index} item={item} />)}
        </div>
      </div>
    </>
  );
}
export default LeftMenu;
