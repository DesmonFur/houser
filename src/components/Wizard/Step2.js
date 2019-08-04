import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import store, { UPDATE_IMAGE_URL } from "../../ducks/store";
export class Step2 extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      image_url: reduxState.image_url
    };
  }

  //   componentDidMount(){
  //     store.subscribe(() => {
  //         const reduxState = store.getState()
  //         this.setState({
  //           image_url: reduxState.image_url
  //         })
  //     })
  // }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
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
      type: UPDATE_IMAGE_URL,
      payload: this.state.image_url
    });
  }

  render() {
    return (
      <div>
        <form action="submit">
          <span className='img-title'>Image URL</span>
          <input
            type="text"
            name="image_url"
            onChange={e => this.handleChange(e)}
            value={this.state.image_url}
            className='img-form' 
            />
        </form>
        <div className="space-inputs">
          <Link to="/wizard/step1">
            <span className="previous-step" onClick={() => this.step()}>
              Previous Step
            </span>
          </Link>
          <Link to="/wizard/step3">
            <span className="next-step2" onClick={() => this.step()}>
              Next Step
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Step2;
