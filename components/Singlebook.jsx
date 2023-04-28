import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea"



class SingleBook extends Component {

  state = {
    selected: false
  }

  selectCard = ()=>{
    this.setState({selected: !this.state.selected})
  }

  render(){
    let cardClass= "align-items-stretch w-100 "
    cardClass+=this.state.selected ? "border border-danger" : ""
    return (
      <Col xs={12} md={4} lg={3} className="d-flex mb-2">
        <Card className={cardClass}>
        <Card.Img
          variant="top"
          src={this.props.book.img}
          className="bookCover"
          onClick={
            this.selectCard
          }
        />
        <Card.Body className="d-flex flex-column justify-content-end">
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>Prezzo: {this.props.book.price}€</Card.Text>
          <Button variant="primary">Scopri di più</Button>
          {this.state.selected &&
            <CommentArea bookAsin={this.props.book.asin}/>
          }
        </Card.Body>
      </Card>
      </Col>
    )
  }
}

export default SingleBook