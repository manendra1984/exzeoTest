import React, { Component } from "react";
import GroceryItem from "./GroceryItem";
class GroceryItemlist extends Component {
  render() {
      return this.props.Gitems.map(c => (
      <GroceryItem
        key={c.id}
        id={c.id}
        name={c.name}
        upvote={c.upvote}
        downvote={c.downvote}
        upVoteClick={this.props.upVoteClickHandler}
        downVoteClick={this.props.downVoteClickHandler}
      />
    ));
  }
}

export default GroceryItemlist;
