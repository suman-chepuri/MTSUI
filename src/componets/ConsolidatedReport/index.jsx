import React, { useEffect } from "react";
import { Container, Col, Button, Row, Stack, Form } from "react-bootstrap";
import csstyle from "./index.module.scss";
import { GoHome } from "react-icons/go";
import TopBar from "../TopBar";
import LeftMenu from "../LeftMenu";
import Table from "react-bootstrap/Table";
import { MdKeyboardArrowRight } from "react-icons/md";

import Accordion from 'react-bootstrap/Accordion';
import { IoEyeSharp } from "react-icons/io5";

function ConsolidatedReport() {
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

                    <Accordion >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Master Documents</Accordion.Header>
                        <Accordion.Body>
                          <Table
                            id="MasterDocuments"

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
                                <th>Name</th>
                                <th>Level 1</th>
                                <th>Level 2</th>
                                <th>Level 3</th>
                                <th>Level 4</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>suman</td>
                                <td>suman12</td>
                                <td>Admin</td>
                                <td>
                                  <a href="#" data-toggle="modal" data-target=".is-example-modal-lg">4</a>
                                </td>
                                <td>9573528727</td>
                              </tr>


                            </tbody>
                          </Table>
                          <div class="modal fade is-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabelr" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title">Views</h5>
                                  <Button variant="light" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </Button>
                                </div>
                                <div class="modal-body">
                                  <Table
                                    id="MasterPop"

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
                                        <th>Document No</th>
                                        <th>Title</th>
                                        <th>Issue No</th>
                                        <th>Rev No</th>
                                        <th>Issue Effective Date</th>
                                        <th>Obsolete Count</th>
                                        <th>&nbsp;</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>suman</td>
                                        <td>suman12</td>
                                        <td>01</td>
                                        <td>03</td>
                                        <td>21/07/2023</td>
                                        <td>3</td>
                                        <td><a href="#" className={csstyle.eye_icon}><IoEyeSharp /></a> </td>
                                      </tr>



                                    </tbody>
                                  </Table>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-primary">Save changes</button>
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Obsolete Documents</Accordion.Header>
                        <Accordion.Body>
                          <Table
                            id="ObsoleteDocuments"

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
                                <th>Name</th>
                                <th>Level 1</th>
                                <th>Level 2</th>
                                <th>Level 3</th>
                                <th>Level 4</th>
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
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Bharani</td>
                                <td>suman12</td>
                                <td>Admin</td>
                                <td>sumanchsmn@gmail.com</td>
                                <td>9573528727</td>
                              </tr>


                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Revised  Documents</Accordion.Header>
                        <Accordion.Body>
                          <Table
                            id="RevisedDocuments"

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
                                <th>Name</th>
                                <th>Level 1</th>
                                <th>Level 2</th>
                                <th>Level 3</th>
                                <th>Level 4</th>
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
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Bharani</td>
                                <td>suman12</td>
                                <td>Admin</td>
                                <td>sumanchsmn@gmail.com</td>
                                <td>9573528727</td>
                              </tr>


                            </tbody>
                          </Table>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>

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
export default ConsolidatedReport;
