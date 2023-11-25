import React, { useState } from "react";
import LeftMenu from "../LeftMenu";
import TopBar from "../TopBar";
import { Container, Col, Row, Table, Form, Button, Modal } from "react-bootstrap";
import { MdKeyboardArrowRight, MdFolderOpen } from "react-icons/md";
import { GoHome } from "react-icons/go";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import csstyle from "./index.module.scss";

function BilletCasting() {

    const [modalShow, setModalShow] = React.useState(false);
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                scrollable={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Reference Documents
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Tabs
                        defaultActiveKey="levelI"
                        id="uncontrolled-tab-example"
                        className="tab_select mb-3 "
                        fill
                    >
                        <Tab eventKey="levelI" title="Level I" >
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th><Form.Check aria-label="option 1" /></th>
                                        <th>Doc Reference Number</th>
                                        <th>Doc Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td><Form.Control type="text" /></td>
                                        <td><Form.Control type="text" /></td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td><Form.Check aria-label="option 1" /></td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><Form.Check aria-label="option 1" /></td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><Form.Check aria-label="option 1" /></td>
                                        <td>Thornton</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><Form.Check aria-label="option 1" /></td>
                                        <td>Thornton</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><Form.Check aria-label="option 1" /></td>
                                        <td>Thornton</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><Form.Check aria-label="option 1" /></td>
                                        <td>Thornton</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><Form.Check aria-label="option 1" /></td>
                                        <td>Thornton</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><Form.Check aria-label="option 1" /></td>
                                        <td>Thornton</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><Form.Check aria-label="option 1" /></td>
                                        <td>Thornton</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><Form.Check aria-label="option 1" /></td>
                                        <td>Thornton</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><Form.Check aria-label="option 1" /></td>
                                        <td>Thornton</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><Form.Check aria-label="option 1" /></td>
                                        <td>Thornton</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><Form.Check aria-label="option 1" /></td>
                                        <td>Thornton</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><Form.Check aria-label="option 1" /></td>
                                        <td>Thornton</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><Form.Check aria-label="option 1" /></td>
                                        <td>Thornton</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><Form.Check aria-label="option 1" /></td>
                                        <td>Thornton</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><Form.Check aria-label="option 1" /></td>
                                        <td>Thornton</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><Form.Check aria-label="option 1" /></td>
                                        <td>Thornton</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><Form.Check aria-label="option 1" /></td>
                                        <td>Thornton</td>
                                        <td>@twitter</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="levelII" title="Level II" >
                            Tab content for level II
                        </Tab>
                        <Tab eventKey="levelIII" title="Level III" >
                            Tab content for level III
                        </Tab>
                        <Tab eventKey="levelIV" title="Level IV" >
                            Tab content for level IV
                        </Tab>
                        <Tab eventKey="levelV" title="Level V" >
                            Tab content for level V
                        </Tab>
                    </Tabs>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} variant="danger">Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    return (
        <>
            <TopBar />
            <div className={csstyle.main_container}>
                <Container fluid>
                    <Row>
                        <LeftMenu />
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
                                                        <a href="#"><GoHome /> Home</a>
                                                    </li>
                                                    <li><MdKeyboardArrowRight /></li>
                                                    <li>
                                                        <a href="#">Home</a>
                                                    </li>

                                                </ul>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                                <div className={csstyle.content_panel}>
                                    <Form>
                                        <Table bordered striped="columns">
                                            <tbody>
                                                <tr>
                                                    <td>Document No</td>
                                                    <td colspan="3">[On Submit]</td>
                                                </tr>
                                                <tr>
                                                    <td>Title</td>
                                                    <td colspan="3"><Form.Control size="sm" type="text" placeholder="Title" /></td>
                                                </tr>
                                                <tr>
                                                    <td>Issue No</td>
                                                    <td colspan="3">0</td>
                                                </tr>
                                                <tr>
                                                    <td>Select Section</td>
                                                    <td colspan="3">
                                                        <Form.Select aria-label="Default select example">
                                                            <option>Select Section</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Select Doc Type</td>
                                                    <td colspan="3">
                                                        <Form.Select aria-label="Default select example">
                                                            <option>Select Doc Type</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Reason For Creation</td>
                                                    <td colspan="3">
                                                        <Form.Control as="textarea" rows={3} />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Attachment</td>
                                                    <td colspan="3">
                                                        <Form.Control
                                                            type="file"
                                                            required
                                                            name="file" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className={csstyle.tbl_col}>
                                                            <span>Reference Documents</span>
                                                            <MdFolderOpen onClick={() => setModalShow(true)} />
                                                        </div>
                                                        <MyVerticallyCenteredModal
                                                            show={modalShow}
                                                            onHide={() => setModalShow(false)}
                                                        />
                                                    </td>
                                                    <td colspan="3">
                                                        Reference Documents
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className={csstyle.tbl_col}>
                                                            <span>ISO Standard Clause </span>
                                                            <MdFolderOpen />
                                                        </div>
                                                    </td>
                                                    <td colspan="3">
                                                        ISO Standard Clause
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className={csstyle.tbl_col}>
                                                            <span>Disribution List</span>
                                                            <MdFolderOpen />
                                                        </div>
                                                    </td>
                                                    <td colspan="3">
                                                        Disribution List
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className={csstyle.tbl_col}>
                                                            <span>Issue List (Hard Copy Distribution)</span>
                                                            <MdFolderOpen />
                                                        </div>
                                                    </td>
                                                    <td colspan="3">
                                                        Issue List (Hard Copy Distribution)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Workflow Definition</td>
                                                    <td colspan="3">
                                                        <Form.Select aria-label="Default select example">
                                                            <option>Select Doc Type</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Retention Period</td>
                                                    <td colspan="3">Until Next Revision</td>
                                                </tr>
                                                <tr>
                                                    <td>Prepared By</td>
                                                    <td>(GLOBAL ADMIN)</td>
                                                    <td>Date of Creation</td>
                                                    <td>17/11/2023</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <div className={csstyle.tbl_btn}>
                                            <Button variant="primary">Save as Draft</Button>{' '}
                                            <Button variant="danger">Close</Button>{' '}
                                            <Button variant="success">Submit</Button>{' '}
                                        </div>
                                    </Form>
                                    {/* <div className="hr" /> */}

                                </div>
                            </div>
                        </div>

                    </Row>
                </Container>
            </div>
        </>
    );
}
export default BilletCasting;
