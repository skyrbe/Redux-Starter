import React from 'react';
import { Component } from 'react';
import BookList from '../containers/book-list';
import SelectBook from '../containers/selected-book';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <SelectBook />
      </div>
    );
  }
}
