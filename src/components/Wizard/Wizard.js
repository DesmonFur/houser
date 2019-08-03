import React, { Component } from "react";
import { Link,Route,Switch } from "react-router-dom";
import axios from "axios";
import store, {CANCEL} from '../../ducks/store'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
export class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state)
  }

  addProperty = () => {
      const {name,address,city,state,zip} = this.state
      axios.post('/api/houses', {name,address,city,state,zip}).then( () =>{
          console.log('ok')
      })
    }

    cancel(){
      store.dispatch({
        type:CANCEL
      })
    }

  render() {
    return (
      <div>
        <Switch>
          <Route  path="/wizard/step1" component={Step1} />
          <Route  path="/wizard/step2" component={Step2} />
          <Route  path="/wizard/step3" component={Step3} />
        </Switch>
        <Link to="/">
          <button onClick={ () => this.cancel()}>Cancel</button>
        </Link>
      
        
      </div>
    );
  }
}

export default Wizard;
