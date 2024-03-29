import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class CreateComponent extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            isbn: '',
            author: ''
        };
    }

    onChange = e => {
        this.setState({ [e.target.name] : e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            title: this.state.title,
            isbn: this.state.isbn,
            author: this.state.author
        };

        axios.post("https://amil-book-manager-api.herokuapp.com/api/books", data)
            .then(res => {this.setState({
                title : '',
                isbn : '',
                author : ''
             })
                this.props.history.push('/');
            }).catch(err => { console.log("Can not add book!") });
    };

    render() {
        return (
            <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Book List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Book</h1>
              <p className="lead text-center">
                  Create new book
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Book'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='ISBN'
                    name='isbn'
                    className='form-control'
                    value={this.state.isbn}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Author'
                    name='author'
                    className='form-control'
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                    value="Submit"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
        );
    }
 }

 export default CreateComponent;