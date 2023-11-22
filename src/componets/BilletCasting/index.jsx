import LeftMenu from "../LeftMenu";
import TopBar from "../TopBar";
import { Container, Col, Row, Table, Form, Button } from "react-bootstrap";
import { MdKeyboardArrowRight, MdFolderOpen } from "react-icons/md";
import { GoHome } from "react-icons/go";
import csstyle from "./index.module.scss";
function BilletCasting() {
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
                                                            <MdFolderOpen />
                                                        </div>
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
