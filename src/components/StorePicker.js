import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // constructor() {
  //     super();
  //     this.goToStore = this.goToStore.bind(this);
  // }

  //  solutia la constructor este declararea unei proprietati, care va fi legata de instanta
  myInput = React.createRef();

  goToStore = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const storeName = this.myInput.value.value;
    // 3. change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${this.storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToSore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
