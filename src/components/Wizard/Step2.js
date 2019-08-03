import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store, {UPDATE_IMAGE_URL} from '../../ducks/store'
export class Step2 extends Component {
    constructor() {
        super();
        const reduxState = store.getState()
        this.state = {
         image_url: reduxState.image_url
        };
      }

      componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
              image_url: reduxState.image_url
            })
        })
    }
    
      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
        console.log(this.state)
      }
    
      addProperty = () => {
          const {name,address,city,state,zip,image_url,mortgage,rent} = this.state
          axios.post('/api/houses', {name,address,city,state,zip,image_url}).then( () =>{
              console.log('ok')
          })
        }

        step(){
            store.dispatch({
                type: UPDATE_IMAGE_URL,
                payload: this.state.image_url
            })
          
        }
    
    
    render() {
        return (
            <div>
        <form action="submit">
          <input type="text" placeholder="image_url" name="image_url" onChange={e => this.handleChange(e)} value={this.state.image_url}/>
        </form>
            <Link to='/wizard/step1'>
                    <button onClick={() => this.step()}>Previous Step</button>
                </Link>
        <Link to='/wizard/step3'>
                <button onClick={()=> this.step()}>Next Step</button>
            </Link>
            <button onClick={() => this.addProperty()}>Add to property</button>

            </div>
        )
    }
}

export default Step2
