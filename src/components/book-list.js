import React, {Component} from 'react';

export default class BookList extends Component {
  renderList(){
    return this.props.books.map((books))
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}
