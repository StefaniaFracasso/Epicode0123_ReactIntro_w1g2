import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";

class AddComment extends Component {
  state = {
    recensione: {
      comment: "",
      rate: 1,
      elementId: this.props.bookAsin,
    },
  };

  sendReview = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify(this.state.recensione),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MWZkNmY4MWI0MjAwMTM5YjI3YmYiLCJpYXQiOjE2ODA1MjQwNjYsImV4cCI6MTY4MTczMzY2Nn0.UjCTAORaVCu0q_cXXjagxZXZKmM-OsuCtidji_bIVOg",
          },
        }
      );
      if (response.ok) {
        alert("RECENSIONE SALVATA CORRETTAMENTE!");
        this.setState({
          recensione: {
            comment: "",
            rate: 1,
            elementId: ''
          },
        });
      } else {
        console.log("errore nella chiamata");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-5">
          <h3>Aggiungi una recensione!</h3>
          <Col>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                this.sendReview();
              }}
            >

              <Form.Group className="mb-3">
                <Form.Label>Inserisci valutazione</Form.Label>
                <Form.Control
                  as="textarea"
                  required
                  rows={2}
                  value={this.state.recensione.comment}
                  onChange={(e) => {
                    this.setState({
                      recensione: {
                        ...this.state.recensione,
                        comment: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Dai un voto da 1 a 5</Form.Label>
                <Form.Select
                  required
                  value={this.state.recensione.rate}
                  onChange={(e) => {
                    this.setState({
                      recensione: {
                        ...this.state.recensione,
                        rate: e.target.value,
                      },
                    });
                  }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Codice Libro</Form.Label>
                <Form.Control 
                placeholder={this.props.bookAsin} 
                disabled
                value={this.state.recensione.elementId} 
                onChange={(e) => {
                    this.setState({
                      recensione: {
                        ...this.state.recensione,
                        elementId: e.target.value,
                      },
                    });
                  }}

                />
              </Form.Group>

              <Button variant="primary" type="submit">
                INVIA RECENSIONE!
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddComment;
