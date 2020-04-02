import React, { Component} from 'react'
import './index.css'
import PropTypes from 'prop-types'

import UserPost from './UserPost'

class UserDetailBody extends Component{
    constructor(props){
        super(props);
        this.state={
            abilities: this.props.abilities
        }
    }
    render(){
        
        console.log(this.state.abilities);
        let abilities= this.state.abilities.map((currentValue, index, array)=>{
            return(<UserPost
                key={ index}
                slot={ currentValue.slot }/>)
        });
        return(
            <div className="UserDetailBody">
                <div> {abilities}</div>
                
            </div>
        );
    }
    
}

UserDetailBody.propTypes ={
    abilities: PropTypes.array.isRequired
}

export default UserDetailBody;