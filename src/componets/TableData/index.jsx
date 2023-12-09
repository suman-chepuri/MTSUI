import React, { useEffect } from "react";
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
  MdKeyboardArrowRight,
} from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

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
                          <ReactHTMLTableToExcel
                            id="test-table-xls-button"
                            className={csstyle.ex_excel}
                            table="example"
                            filename="tablexls"
                            sheet="tablexls"
                            buttonText={<AiOutlineFileExcel />}
                          />
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
                      id="example"
                      class="stripe row-border order-column"
                      style={{ width: "100%" }}
                      striped
                      bordered
                      hover
                      className={csstyle.table_data}
                      responsive
                    >
                      <thead>
                        <tr className="tbl_sort">
                          <th>#</th>
                          <th>
                            <span></span>{" "}
                          </th>
                          <th> </th>
                          <th>User Name</th>
                          <th>Login Id</th>
                          <th>Role Function</th>
                          <th>Email Id</th>
                          <th>Contact Number</th>
                          <th>Status</th>

                          <th>Created By</th>
                          <th>Created On</th>
                          <th>Modified By</th>
                          <th>Modified On</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>suman</td>
                          <td>suman12</td>
                          <td>Admin</td>
                          <td>sumanchsmn@gmail.com</td>
                          <td>9573528727</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>shivani</td>
                          <td>shivani</td>
                          <td>Sub Admin</td>
                          <td>shivani@gmail.com</td>
                          <td>1234567890</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>suman</td>
                          <td>suman12</td>
                          <td>Admin</td>
                          <td>sumanchsmn@gmail.com</td>
                          <td>9573528727</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>shivani</td>
                          <td>shivani</td>
                          <td>Sub Admin</td>
                          <td>shivani@gmail.com</td>
                          <td>1234567890</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>suman</td>
                          <td>suman12</td>
                          <td>Admin</td>
                          <td>sumanchsmn@gmail.com</td>
                          <td>9573528727</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>shivani</td>
                          <td>shivani</td>
                          <td>Sub Admin</td>
                          <td>shivani@gmail.com</td>
                          <td>1234567890</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>suman</td>
                          <td>suman12</td>
                          <td>Admin</td>
                          <td>sumanchsmn@gmail.com</td>
                          <td>9573528727</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>shivani</td>
                          <td>shivani</td>
                          <td>Sub Admin</td>
                          <td>shivani@gmail.com</td>
                          <td>1234567890</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>suman</td>
                          <td>suman12</td>
                          <td>Admin</td>
                          <td>sumanchsmn@gmail.com</td>
                          <td>9573528727</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>shivani</td>
                          <td>shivani</td>
                          <td>Sub Admin</td>
                          <td>shivani@gmail.com</td>
                          <td>1234567890</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>suman</td>
                          <td>suman12</td>
                          <td>Admin</td>
                          <td>sumanchsmn@gmail.com</td>
                          <td>9573528727</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>shivani</td>
                          <td>shivani</td>
                          <td>Sub Admin</td>
                          <td>shivani@gmail.com</td>
                          <td>1234567890</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>suman</td>
                          <td>suman12</td>
                          <td>Admin</td>
                          <td>sumanchsmn@gmail.com</td>
                          <td>9573528727</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>shivani</td>
                          <td>shivani</td>
                          <td>Sub Admin</td>
                          <td>shivani@gmail.com</td>
                          <td>1234567890</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>suman</td>
                          <td>suman12</td>
                          <td>Admin</td>
                          <td>sumanchsmn@gmail.com</td>
                          <td>9573528727</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>shivani</td>
                          <td>shivani</td>
                          <td>Sub Admin</td>
                          <td>shivani@gmail.com</td>
                          <td>1234567890</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>suman</td>
                          <td>suman12</td>
                          <td>Admin</td>
                          <td>sumanchsmn@gmail.com</td>
                          <td>9573528727</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>shivani</td>
                          <td>shivani</td>
                          <td>Sub Admin</td>
                          <td>shivani@gmail.com</td>
                          <td>1234567890</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>suman</td>
                          <td>suman12</td>
                          <td>Admin</td>
                          <td>sumanchsmn@gmail.com</td>
                          <td>9573528727</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <MdEdit className={csstyle.edit_ic} />
                          </td>
                          <td>
                            <MdOutlineClose className={csstyle.edit_cl} />
                          </td>
                          <td>shivani</td>
                          <td>shivani</td>
                          <td>Sub Admin</td>
                          <td>shivani@gmail.com</td>
                          <td>1234567890</td>
                          <td>Approve</td>

                          <td>10-11-2023</td>
                          <td>10-12-2023</td>
                          <td>10-12-2023</td>
                          <td>10-10-2023</td>
                        </tr>
                      </tbody>
                    </Table>
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
