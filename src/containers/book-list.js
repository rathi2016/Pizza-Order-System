import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((books)=> {
      return (
        <li className="list-group-item" >{books.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed
  // to all of our reducer
  return bindActionCreators({selectBook: selectBook}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
