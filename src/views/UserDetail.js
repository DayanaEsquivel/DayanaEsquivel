import React, { Component} from 'react'
import { connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import { getUserById } from '../actions/index'
import UserDetailCover from '../components/UserDetailCover'
import UserDetailBody from '../components/UserDetailBody'



class UserDetail extends Component{
    UNSAFE_componentWillMount(){
        this.props.getUserById(this.props.match.params.userName);
        //console.log(this.props.match.params.userName);
    }
    render(){
        console.log(this.props.UserDetail)
        if(this.props.UserDetail.data){
            const {name, abilities}= this.props.UserDetail.data;
            return(
                <div>
                    <UserDetailCover name ={  name}/>
                    <UserDetailBody abilities={abilities}/>
                </div>
            );

        }
        return <div></div>
        
        
    }
}

function mapStateToProps( state){
    //console.log(state);
    return{
        UserDetail: state.getUserById
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getUserById}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);