import React, { Component } from "react";
import axios from "axios";
import "./GroceryApp.css";
import GroceryItemlist from "./GroceryItemsList";
class GroceryApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
 downVoteClickHandler = (num, pid) => {
    if (num > 0) {
      axios
        .put(`https://5cbabab23ba98700147dcdea.mockapi.io/products/${pid}`, {
          downvote: num - 1
        })
        .then(() => {
          this.state.products.map(function(obj) {
            if (obj.id === pid) {
              obj.downvote--;
              return obj;
            }
          });

          this.setState({ products: this.state.products });
        });
    }
  };

  upVoteClickHandler = (num, pid) => {
    axios
      .put(`https://5cbabab23ba98700147dcdea.mockapi.io/products/${pid}`, {
        upvote: num + 1
      })
      .then(() => {
        this.state.products.map(function(obj) {
          if (obj.id === pid) {
            obj.upvote++;
            return obj;
          }
        });
        this.setState({ products: this.state.products });
      });
  };

  componentDidMount() {
    axios
      .get(`https://5cbabab23ba98700147dcdea.mockapi.io/products`)
      .then(res => {
        const products = res.data.map(obj => ({
          id: obj.id,
          name: obj.name,
          upvote: obj.upvote,
          downvote: obj.downvote
        }));
        this.setState({ products });
      })
      .catch(err => {
        console.error("err", err);
      });
  }

  render() {
      return (
      <div className="GroceyApp">
        <header className="app-header">
          <h1>Grocery List</h1>
        </header>
        <ul className="list-group grocery-list">
          <GroceryItemlist
            Gitems={this.state.products}
            upVoteClickHandler={this.upVoteClickHandler}
            downVoteClickHandler={this.downVoteClickHandler}
          />
        </ul>
      </div>
    );
  }
}

export default GroceryApp;
