import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import store, {
  UPDATE_NAME,
  UPDATE_ADDRESS,
  UPDATE_CITY,
  UPDATE_STATE,
  UPDATE_ZIP
} from "../../ducks/store";

export class Step1 extends Component {
  constructor() {
    const reduxState = store.getState();
    super();
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip
    };
  }

  // componentDidMount() {
  //   store.subscribe(() => {
  //     const reduxState = store.getState();
  //     this.setState({
  //       name: reduxState.name,
  //       address: reduxState.address,
  //       city: reduxState.city,
  //       state: reduxState.state,
  //       zip: reduxState.zip
  //     });
  //   });
  // }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  // addProperty = () => {
  //   const {
  //     name,
  //     address,
  //     city,
  //     state,
  //     zip,
  //     image_url,
  //     mortgage,
  //     rent
  //   } = this.state;
  //   axios
  //     .post("/api/houses", { name, address, city, state, zip, image_url })
  //     .then(() => {
  //       console.log("ok");
  //     });
  // };
  step() {
    store.dispatch({
      type: UPDATE_NAME,
      payload: this.state.name
    });
    store.dispatch({
      type: UPDATE_ADDRESS,
      payload: this.state.address
    });
    store.dispatch({
      type: UPDATE_CITY,
      payload: this.state.city
    });
    store.dispatch({
      type: UPDATE_STATE,
      payload: this.state.state
    });
    store.dispatch({
      type: UPDATE_ZIP,
      payload: this.state.zip
    });
  }

  render() {
    return (
      <div>
        <form action="submit">
          <span id="name-title">Property Name</span>
          <input
            type="text"
            name="name"
            onChange={e => this.handleChange(e)}
            value={this.state.name}
            id="name-input"
          />
          <span id="address-title">Address</span>
          <input
            type="text"
            name="address"
            onChange={e => this.handleChange(e)}
            value={this.state.address}
            id="address-input"
          />
          <div className="last-row">
            <span id="city-title">City</span>
            <input
              type="text"
              name="city"
              onChange={e => this.handleChange(e)}
              value={this.state.city}
              id="city-input"
            />
            <span id="state-title">State</span>
            <input
              type="text"
              name="state"
              onChange={e => this.handleChange(e)}
              value={this.state.state}
              id="state-input"
            />
            <span id="zip-title">Zip</span>
            <input
              type="text"
              name="zip"
              onChange={e => this.handleChange(e)}
              value={this.state.zip}
              id="zip-input"
            />
          </div>
        </form>

        <Link to="/wizard/step2">
          <span onClick={() => this.step()} className="next-step">
            Next Step
          </span>
        </Link>
      </div>
    );
  }
}

export default Step1;
