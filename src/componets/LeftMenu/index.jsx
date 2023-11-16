import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import csstyle from "./index.module.scss";
import { Link } from "react-router-dom";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import { Value } from "sass";

function LeftMenu() {
  const [cat, setCat] = useState(false);
  const [common, setCommon] = useState(false);
  const [document, setDocument] = useState(false);

  const handleCategoryClick = category => {
    switch (category) {
      case "cat":
        setCat(!cat);
        setCommon(false);
        setDocument(false);
        break;
      case "common":
        setCat(false);
        setCommon(!common);
        setDocument(false);
        break;
      case "document":
        setCat(false);
        setCommon(false);
        setDocument(!document);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={csstyle.sidebar}>
        <ul className={csstyle.nav}>
          <li>
            <div onClick={() => handleCategoryClick("cat")}>
              <span>Categories</span>
              <BiSolidDownArrow
                className={cat ? csstyle.rotate_arrow : csstyle.rotate_r}
              />
            </div>
            <Collapse in={cat}>
              <ul>
                <li>
                  <Link to="/">
                    <BsArrowRightShort />
                    <span>Common Master</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <BsArrowRightShort />
                    <span>Document Master</span>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <div onClick={() => handleCategoryClick("common")}>
              <span>Categories</span>
              <BiSolidDownArrow
                className={common ? csstyle.rotate_arrow : csstyle.rotate_r}
              />
            </div>
            <Collapse in={common}>
              <ul>
                <li>
                  <Link to="/">Common Master</Link>
                </li>
                <li>
                  <Link to="/">Document Master</Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <div onClick={() => handleCategoryClick("document")}>
              <span>Document Master</span>
              <BiSolidDownArrow
                className={document ? csstyle.rotate_arrow : csstyle.rotate_r}
              />
            </div>
            <Collapse in={document}>
              <ul>
                <li>
                  <Link to="/">Common Master</Link>
                </li>
                <li>
                  <Link to="/">Document Master</Link>
                </li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </div>
    </>
  );
}
export default LeftMenu;
