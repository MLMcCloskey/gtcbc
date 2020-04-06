import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";

class Books extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
  };

  // Add code here to get all books from the database and save them to this.state.books
  componentDidMount() {
    this.loadPage();
  }

  loadPage = () => {
    API.getBooks().then(res => 
      // console.log(res.data);
      this.setState({
        books: res.data,
        title: "",
        author: "",
        synopsis: "",
      })
    )
      .catch(err => console.log(err));
  }

  handleChange = (event) => {
    // console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    })
    // console.log(this.state.title)
  }

  handleClick = (event) => {
    event.preventDefault();
    API.saveBook({
      title: this.state.title,
      author: this.state.author,
      synopsis: this.state.synopsis,
    }).then( res => this.loadPage())
    .catch(err => console.log(err))
  }

  handleDelete = (id) => {
    // event.preventDefault();
    API.deleteBook(id).then(res => this.loadPage())
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" onChange={this.handleChange}/>
              <Input name="author" placeholder="Author (required)" onChange={this.handleChange} />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" onChange={this.handleChange} />
              <FormBtn onClick={this.handleClick}>Submit Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => this.handleDelete(book._id)}/>
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
