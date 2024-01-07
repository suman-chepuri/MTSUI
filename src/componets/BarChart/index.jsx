import React, { useState } from "react";
import LeftMenu from "../LeftMenu";
import TopBar from "../TopBar";
import {
  Container,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import {
  MdKeyboardArrowRight, MdEdit,
  MdOutlineClose
} from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import Card from 'react-bootstrap/Card';
import csstyle from "./index.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoRefreshCircleOutline } from "react-icons/io5";
import faker from 'faker';
import Table from "react-bootstrap/Table";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ArcElement,
  PointElement,
  LineElement,
);

export const options = {
  responsive: true,

};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [300, 500, 700, 200, 900, 400, 600],
      backgroundColor: 'rgba(1, 184, 170, 1)',
    },

  ],
};
export const PieData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
export const LineOptions = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Multi Axis',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};
//const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const LineData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
  ],
};
function Barchart() {
  const sampleData = [
    { property1: 'Value 1', property2: 'Value A' },
    { property1: 'Value 2', property2: 'Value B' },
    // Add more data objects based on your structure
  ];
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
                        <div>
                          <h3>Page Title</h3>
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
                  <Row>
                    <Col md={4}>
                      <Card >
                        <Card.Header className={csstyle.bar_title}>
                          <div><FaChartBar />Document Control</div>

                          <Button variant="link"><IoRefreshCircleOutline /></Button>
                        </Card.Header>
                        <Card.Body className={csstyle.chat_height}>
                          <Bar options={options} data={data} />
                        </Card.Body>
                        <Card.Footer className={csstyle.bar_footer}>
                          <Button variant="link">View  Details</Button>
                          <Button variant="link"><FaRegArrowAltCircleRight />
                          </Button>
                        </Card.Footer>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card >
                        <Card.Header className={csstyle.bar_title}>
                          <div><FaChartBar />Document Control</div>

                          <Button variant="link"><IoRefreshCircleOutline /></Button>
                        </Card.Header>
                        <Card.Body className={csstyle.pie_chart + " " + csstyle.chat_height}>
                          <Pie data={PieData} />
                        </Card.Body>
                        <Card.Footer className={csstyle.bar_footer}>
                          <Button variant="link">View  Details</Button>
                          <Button variant="link"><FaRegArrowAltCircleRight />
                          </Button>
                        </Card.Footer>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card >
                        <Card.Header className={csstyle.bar_title}>
                          <div><FaChartBar />Document Control</div>

                          <Button variant="link"><IoRefreshCircleOutline /></Button>
                        </Card.Header>
                        <Card.Body className={csstyle.chat_height}>
                          <Line options={LineOptions} data={LineData} />
                        </Card.Body>
                        <Card.Footer className={csstyle.bar_footer}>
                          <Button variant="link">View  Details</Button>
                          <Button variant="link"><FaRegArrowAltCircleRight />
                          </Button>
                        </Card.Footer>
                      </Card>
                    </Col>
                    <Col md={12}>
                      <div className={csstyle.chart_table}>
                        <Table
                          id="barChartTable"

                          style={{ width: "100%" }}
                          striped
                          bordered
                          hover
                          className="tableIndex  stripe row-border order-column"
                          responsive
                        >
                          <thead>
                            <tr className="tbl_sort">
                              <th>#</th>
                              <th>
                                <span></span>{" "}
                              </th>
                              <th><span></span>{" "} </th>
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
                              <th>Active</th>
                              <th>Delete</th>
                              <th>Inactive</th>
                              <th>Pending</th>
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
                              <td><Button className="active_global">Active</Button></td>
                              <td><Button className="delete_global">Delete</Button></td>
                              <td><Button className="inactive_global">Inactive</Button></td>
                              <td><Button className="pending_global">Pending</Button></td>

                            </tr>


                          </tbody>
                        </Table>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Barchart;
