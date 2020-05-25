import React, { Component } from "react";
import "bootstrap";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: [],
  };

  //   constructor() {
  //     super();
  //     this.handleClick = this.handleClick.bind(this);
  //   }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleClick} className="btn btn-secondary btn-sm">
          Increment
        </button>
        {this.renderTags()}
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags!</p>;
    } else {
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    const exp = <span>{count === 0 ? <span>Zero</span> : count}</span>;
    return exp;
  }
}

export default Counter;
