import { Col, Row } from "react-bootstrap";

function Welcome() {
  return (
    <div className="px-5 py-2 mb-4" id="jumbotron">
      <div className="container-fluid py-2 d-flex">
        <Row>
            <Col xs={12}>
            <img alt="logo" src="/assets/images/logo-light.png" className="img-fluid"/>
            <p className="h5 ms-3 d-none d-md-block fw-bold text-light text-start">La tua libreria EPICA!</p>
            </Col>
        </Row>
      </div>
    </div>
  );
}

export default Welcome