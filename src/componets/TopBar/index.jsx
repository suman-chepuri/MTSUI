import { Col, Container, Row, Button } from "react-bootstrap";
import csstyle from "./index.module.scss";
import { AiOutlineLogout } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { FaUserTie } from "react-icons/fa";
import { MdLockReset } from "react-icons/md";
import { BiNotepad, BiHelpCircle } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
function TopBar() {
  return (
    <>
      <div className={csstyle.topbar}>
        <Container fluid>
          <Row>
            <div className={csstyle.navbar_brand_wrapper}>
              <div className={csstyle.topbar_logo}>
                <img src="./images/MTS-LogoFinal.jpg" alt="" />
              </div>
            </div>
            <div className={csstyle.navbar_menu_wrapper}>
              <div className={csstyle.top_right}>
                <div className={csstyle.user_name}>Welcome Suman !</div>
                <div className={csstyle.top_right_icons}>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
                  >
                    <Button>
                      <AiOutlineLogout />
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
                  >
                    <Button>
                      <BiNotepad />
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
                  >
                    <Button>
                      <BiHelpCircle />
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
                  >
                    <Button>
                      <ImProfile />
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
                  >
                    <Button>
                      <FaUserTie />
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
                  >
                    <Button>
                      <MdLockReset />
                    </Button>
                  </OverlayTrigger>
                </div>
              </div>
              <div className={csstyle.top_right_menu}>
                <ul>
                  <li>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Dashboard"
                      className={csstyle.drop_menu}
                    >
                      <Dropdown.Item href="#/action-1"><BsArrowRightShort/> Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                      <BsArrowRightShort/> Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                      <BsArrowRightShort/> Something else
                      </Dropdown.Item>
                    </DropdownButton>
                  </li>
                  <li>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title=" Documents"
                    >
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </DropdownButton>
                  </li>
                  <li>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title=" Data Management"
                    >
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </DropdownButton>
                  </li>
                  <li>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="  Perfomance Indicators"
                    >
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </DropdownButton>
                  </li>
                </ul>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default TopBar;
