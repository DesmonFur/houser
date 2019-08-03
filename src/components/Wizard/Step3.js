import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store, { UPDATE_MORTGAGE, UPDATE_RENT} from '../../ducks/store'
export class Step3 extends Component {
    constructor() {
        const reduxState = store.getState()
        super();
        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.mortgage
        };
      }

      componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
              mortgage: reduxState.mortgage,
              rent: reduxState.rent
            })
        })
    }
    
      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
        console.log(this.state)
      }


        step(){
            store.dispatch({
                type: UPDATE_MORTGAGE,
                payload: this.state.mortgage
            })
            store.dispatch({
                type: UPDATE_RENT,
                payload: this.state.rent
            })
            let reduxState = store.getState()
            console.log(reduxState)
            axios.post('/api/houses', reduxState)
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
          <input type="text" placeholder="mortgage" name="mortgage" onChange={e => this.handleChange(e)} value={this.state.mortgage} />
          <input type="text" placeholder="rent" name="rent" onChange={e => this.handleChange(e)} value={this.state.rent}/>
         
        </form>

        <Link to='/wizard/step2'>
                    <button onClick={() => this.step()}>Previous Step</button>
                </Link>

        <Link to='/'>
                <button onClick={() => this.step()}>Complete</button>
            </Link>

            </div>
        )
    }
}

export default Step3
