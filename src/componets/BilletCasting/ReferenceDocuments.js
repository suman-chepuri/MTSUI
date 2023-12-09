import React, { useState } from "react";
import { Tab, Table, Tabs, Form } from "react-bootstrap";
import csstyle from "./index.module.scss";
function ReferenceDocuments() {
  return (
    <Tabs
      defaultActiveKey="levelI"
      id="uncontrolled-tab-example"
      className="tab_select mb-3 "
      fill
    >
      <Tab eventKey="levelI" title="Level I">

        <Table class="stripe row-border order-column"
          style={{ width: "100%" }}
          striped
          bordered
          hover
          className={csstyle.table_data}
          responsive
          id="dataTabler" >
          <thead>
            <tr>
              <th>#</th>
              <th>
                <Form.Check aria-label="option 1" />
              </th>
              <th>Doc Reference Number</th>
              <th>Doc Title</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>1</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Form.Check aria-label="option 1" />
              </td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>

      </Tab>
      <Tab eventKey="levelII" title="Level II">
        Tab content for level II
      </Tab>
      <Tab eventKey="levelIII" title="Level III">
        Tab content for level III
      </Tab>
      <Tab eventKey="levelIV" title="Level IV">
        Tab content for level IV
      </Tab>
      <Tab eventKey="levelV" title="Level V">
        Tab content for level V
      </Tab>
    </Tabs>
  );
}
export default ReferenceDocuments;