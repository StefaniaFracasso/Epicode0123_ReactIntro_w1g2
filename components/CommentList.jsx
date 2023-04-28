import { Container, ListGroup } from "react-bootstrap";
import { Component } from "react";

class CommentList extends Component {
    render(){
        console.log(this.props.recensioni)
        return(
            <Container className="mt-3">
                <ListGroup>
                {this.props.recensioni.map((recensione) => (
                <ListGroup.Item key={recensione._id}>
                  {recensione.comment} | Valutazione: {recensione.rate}
                </ListGroup.Item>
                ))}
                </ListGroup>
            </Container>
        )
    }
}

export default CommentList