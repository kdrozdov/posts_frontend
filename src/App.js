import React, { Component } from 'react';
import Post from './post';
import PostForm from './post-form';
import {posts} from './post-store';

export default class App extends Component {
  render() {

    return (
      <div>
        {
          posts.map((post) => {
            return(
              <Post key={post.id}
                    id={post.id}
                    name={post.name}
                    description={post.description} />
            );
          })
        }
        <PostForm />
      </div>
    );
  }
}
