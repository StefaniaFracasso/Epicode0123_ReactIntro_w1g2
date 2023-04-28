import SingleBook from "./Singlebook";
import FantasyBooks from "../data/fantasy.json";
import { Component } from "react";
import { Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form'

class BookList extends Component {

  state = {
    searchedString: ""
  }

  getSearchInput = e => {
    this.setState({
      searchedString: e.target.value
    })
    console.log(this.state.searchedString)
  }

  render() {
    return (
      <>
      <div>
        <h2>Cerca tra i nostri libri fantasy</h2>
      <Form className="w-50 mb-5 mx-auto" >
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={this.getSearchInput}
      />
    </Form>
      </div>
      <Row className="container-fluid d-flex align-items-stretch flex-wrap">
          {FantasyBooks.map((book) => {
            if (this.state.searchedString ==="" || book.title.toLowerCase().indexOf(this.state.searchedString.toLowerCase()) !== -1) {
              return <SingleBook book={book} key={book.asin} />;
            }
            return null
          })}
      </Row>
      </>
    );
  }

}

export default BookList;
