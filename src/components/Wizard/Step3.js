import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import store, { UPDATE_MORTGAGE, UPDATE_RENT, CANCEL } from "../../ducks/store";
export class Step3 extends Component {
  constructor() {
    const reduxState = store.getState();
    super();
    this.state = {
      mortgage: reduxState.mortgage,
      rent: reduxState.rent
    };
  }

  //   componentDidMount(){
  //     store.subscribe(() => {
  //         const reduxState = store.getState()
  //         this.setState({
  //           mortgage: reduxState.mortgage,
  //           rent: reduxState.rent
  //         })
  //     })
  // }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  step() {
    store.dispatch({
      type: UPDATE_MORTGAGE,
      payload: this.state.mortgage
    });
    store.dispatch({
      type: UPDATE_RENT,
      payload: this.state.rent
    });
  }

  complete() {
    store.dispatch({
      type: UPDATE_MORTGAGE,
      payload: this.state.mortgage
    });
    store.dispatch({
      type: UPDATE_RENT,
      payload: this.state.rent
    });
    let reduxState = store.getState();
    console.log(reduxState);
    axios.post("/api/houses", reduxState);
    axios.get("/api/houses");
    store.dispatch({
      type: CANCEL
    });
  }
  // addProperty = () => {
  //     const {name,address,city,state,zip,image_url,mortgage,rent} = this.state
  //     axios.post('/api/houses', {name,address,city,state,zip,image_url,mortgage,rent}).then( () =>{
  //         console.log('ok')
  //     })
  //   }

  render() {
    return (
      <div>
        <form action="submit">
          <span className='mortgage'>Monthly Mortgage Amount</span>
          <input
            type="text"
            name="mortgage"
            onChange={e => this.handleChange(e)}
            value={this.state.mortgage}
className='mortgage-input'
          />
          <span className='rent'>Desired Monthly Rent</span>
          <input
            type="text"
            name="rent"
            onChange={e => this.handleChange(e)}
            value={this.state.rent}
                 className='rent-input'
          />
        </form>
        <div className="space-inputs">
          <Link to="/wizard/step2">
            <span className="previous-step2" onClick={() => this.step()}>
              Previous Step
            </span>
          </Link>
          <Link to="/">
            <span
              className="previous-step2"
              id="complete"
              onClick={() => this.complete()}
            >
              Complete
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Step3;
