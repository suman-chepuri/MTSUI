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
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { HiOutlineDocument } from "react-icons/hi";

function AgeingReport() {
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
                      <div className={csstyle.button_dd}>
                        <DropdownButton
                          id="dropdown-basic-button"
                          title="Pending less than 3  Months"
                          className={csstyle.drop_menu}
                        >
                          <div>
                            <Form.Control
                              type="text"
                              placeholder="type dummy"
                            />
                          </div>
                          <Dropdown.Item href="#/action-1"> Pending less than 3 Months</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Pending greater than 3 Months
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Due within 3 months
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-4">
                            Due after 3 months
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-5">
                            Others
                          </Dropdown.Item>
                        </DropdownButton>
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
                      id="AgeingReport"

                      style={{ width: "100%" }}
                      striped
                      bordered
                      hover
                      className="  stripe row-border order-column"
                      responsive
                    >
                      <thead>
                        <tr className="tbl_sort">
                          <th>#</th>
                          <th>&nbsp;</th>
                          <th>Document No</th>
                          <th>Title</th>
                          <th>Categoty</th>
                          <th>Level</th>
                          <th>Section</th>
                          <th>Issue No</th>
                          <th>Rev No</th>
                          <th>Initiated By</th>
                          <th>Issue Effective Date</th>
                          <th>Next Due Date </th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td><div className={csstyle.doc_letter}><HiOutlineDocument />
                            <span>N</span></div></td>
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
export default AgeingReport;
