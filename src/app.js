import React, { Component } from 'react';
import PostList from './post-list';
import PostForm from './post-form';
import Navbar from './navbar';
import {PostService} from './post-service';
import {Col, Row} from 'react-bootstrap';
import TestButton from './containers/TestButton';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.postService = new PostService();
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
  }

  componentDidMount() {
    this.postService.fetchAll()
      .then((response) => {
        this.setState({posts: response.data});
      });
  }

  handlePostSubmit(params) {
    this.postService.create(params)
      .then((response) => {
        let posts = this.state.posts.concat([response.data]);
        this.setState({posts: posts});
      });
  }

  render() {

    return (
      <div className="app">
        <Navbar />
        <Row>
          <Col md={8} xsOffset={2}>
            <PostList posts={this.state.posts} />
            <PostForm onPostSubmit={this.handlePostSubmit} />
            <TestButton />
          </Col>
        </Row>
      </div>
    );
  }
}
