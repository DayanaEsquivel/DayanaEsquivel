import React, { Component} from 'react'
import './index.css'
import PropTypes from 'prop-types'

class UserPost extends Component{
    
    render(){
        const { slot } = this.props;
        return(
            <div className="UserPost">
                <h1> {slot} </h1>
                
            </div>
        );
    }
}

UserPost.propTypes= {
    slot: PropTypes.any
}

export default UserPost;