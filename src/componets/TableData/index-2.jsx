import React from "react";
import { Container, Col, Button, Row, Stack, Form } from "react-bootstrap";
import csstyle from "./index.module.scss";
import { AiOutlineFileExcel, AiOutlineFilePdf } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import TopBar from "../TopBar";
import LeftMenu from "../LeftMenu";
import Table from "react-bootstrap/Table";
import {
  MdEdit,
  MdOutlineClose,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdSearch,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
function TableData() {
  return (
    <>
      <TopBar />
      <div className={csstyle.main_container}>
        <Container fluid>
          <Row>
            <LeftMenu />

            <>
              <div className={csstyle.main_panel}>
                <div className={csstyle.content_wrapper}>
                  <div className={csstyle.bead_crum}>
                    <Container fluid>
                      <Row>
                        <Col md={6}>
                          <div>
                            <h3>Table Data</h3>
                          </div>
                        </Col>
                        <Col md={6}>
                          <ul>
                            <li>
                              <a href="#">
                                <GoHome /> Home
                              </a>
                            </li>
                            <li>
                              <MdKeyboardArrowRight />
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <div className={csstyle.content_panel}>
                    <div className={csstyle.table_dt}>
                      <div className={csstyle.search_fi}>
                        <div className={csstyle.search_box}>
                          <MdSearch />
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control type="text" placeholder="Search…" />
                          </Form.Group>
                        </div>
                        <div className={csstyle.search_dt}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="date"
                              placeholder="Created On"
                            />
                          </Form.Group>
                        </div>
                        <div className={csstyle.search_dt}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="date"
                              placeholder="Modified On"
                            />
                          </Form.Group>
                        </div>
                        <div className={csstyle.search_dt}>
                          <Button className={csstyle.go_btn}>Go</Button>
                        </div>
                      </div>
                      <div className={csstyle.tools_dt}>
                        <Button>
                          <BiPlus /> <span>Add</span>
                        </Button>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip id="tooltip-disabled">
                              Export Excel
                            </Tooltip>
                          }
                        >
                          <Button className={csstyle.ex_excel}>
                            <AiOutlineFileExcel />
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip id="tooltip-disabled">Export Pdf</Tooltip>
                          }
                        >
                          <Button className={csstyle.ex_pdf}>
                            <AiOutlineFilePdf />
                          </Button>
                        </OverlayTrigger>
                      </div>
                    </div>
                    <Table
                      striped
                      bordered
                      hover
                      className={csstyle.table_data}
                    >
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>User Name</th>
                          <th>Login Id</th>
                          <th>Role Function</th>
                          <th>Email Id</th>
                          <th>Contact Number</th>
                          <th>Status</th>
                          <th> &nbsp;</th>
                          <th> &nbsp;</th>
                          <th>Created By</th>
                          <th>Created On</th>
                          <th>Modified By</th>
                          <th>Modified On</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>suman</td>
                          <td>suman12</td>
                          <td>Admin</td>
                          <td>sumanchsmn@gmail.com</td>
                          <td>9573528727</td>
                          <td>Approve</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>suman</td>
                          <td>suman12</td>
                          <td>Admin</td>
                          <td>sumanchsmn@gmail.com</td>
                          <td>9573528727</td>
                          <td>Approve</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>suman</td>
                          <td>suman12</td>
                          <td>Admin</td>
                          <td>sumanchsmn@gmail.com</td>
                          <td>9573528727</td>
                          <td>Approve</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                      </tbody>
                    </Table>
                    <div className={csstyle.pagination_dt}>
                      <div>
                        Showing <b>5</b> out of <b>25</b> entries
                      </div>
                      <ul>
                        <li>
                          <a href="#">
                            <MdKeyboardDoubleArrowLeft />
                          </a>
                        </li>
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">5</a>
                        </li>
                        <li>
                          <a href="#">
                            <MdKeyboardDoubleArrowRight />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default TableData;
