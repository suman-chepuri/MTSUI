import csstyle from "./index.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBar from "../TopBar";
import LeftMenu from "../LeftMenu";
import RightSection from "../RightSection";
function AdminHome() {
  return (
    <>
      <TopBar />
      <div className={csstyle.main_container}>
        <Container fluid>
          <Row>
            <LeftMenu />

            <RightSection />
          </Row>
        </Container>
      </div>
    </>
  );
}
export default AdminHome;
