import { Container, Col, Button, Row, Stack } from "react-bootstrap";
import csstyle from "./index.module.scss";

import { AiOutlinePlusCircle, AiOutlineEdit } from "react-icons/ai";
import { BiSolidTreeAlt, BiPlus } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoHome } from "react-icons/go";
function RightSection() {
  return (
    <>
      <div className={csstyle.main_panel}>
        <div className={csstyle.content_wrapper}>
          <div className={csstyle.bead_crum}>
            <Container fluid>
              <Row>
              <Col md={6}>
                <div><h3>Page Title</h3></div>
              </Col>
                <Col md={6}>
                  <ul>
                    <li>
                      <a href="#"><GoHome/> Home</a>
                    </li>
                    <li><MdKeyboardArrowRight/></li>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
          <div className={csstyle.content_panel}>
          <div className="d-flex justify-content-end">
            <Button className="button_gl">
              <BiPlus /> <span>Add</span>
            </Button>
          </div>
          <div className="hr" />
          <div className={csstyle.row_box}>
            <div className={csstyle.row_level}>
              <Stack direction="horizontal" gap={3}>
                <div className={csstyle.level_icon}>
                  <BiSolidTreeAlt />
                </div>
                <div className="p-1">Level I</div>
                <div className="p-3">
                  <Button>
                    <AiOutlineEdit />
                  </Button>
                </div>
              </Stack>
              <Stack direction="horizontal" gap={3}>
                <div className={csstyle.level_icon}>
                  <BiSolidTreeAlt />
                </div>
                <div className="p-1">Level I</div>
                <div className="p-3">
                  <Button>
                    <AiOutlineEdit />
                  </Button>
                </div>
              </Stack>
              <Stack direction="horizontal" gap={3}>
                <div className={csstyle.level_icon}>
                  <BiSolidTreeAlt />
                </div>
                <div className="p-1">Level I</div>
                <div className="p-3">
                  <Button>
                    <AiOutlineEdit />
                  </Button>
                </div>
              </Stack>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RightSection;
