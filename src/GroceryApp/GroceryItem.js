import React, { Component } from "react";

class GroceryItem extends Component {
  render() {
    return (
      <li className="list-group-item d-flex  align-items-center">
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
              <button type="button" onClick={this.props.upVoteClick.bind(this,this.props.upvote ,this.props.id)} className="btn btn-primary">+</button>
          </div>

          <label className="col-form-label">{this.props.name}</label>
          <div className="input-group-append">
                <button type="button" onClick={this.props.downVoteClick.bind(this,this.props.downvote ,this.props.id)} className="btn btn-danger">-</button> 
          </div>
        </div>

        <div className="vote-details">
          <span className="badge badge-primary badge-pill">
            {this.props.upvote}
          </span>
          <span className="badge badge-danger badge-pill">
            {this.props.downvote}
          </span>
        </div>
      </li>
    );
  }
}
export default GroceryItem;
