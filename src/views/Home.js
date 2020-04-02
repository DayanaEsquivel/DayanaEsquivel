import React, { Component} from 'react'
import { connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import { getUsers } from '../actions'
import UserItem from '../components/UserItem'
import { CircleLoader } from 'react-spinners'
import 'materialize-css/dist/css/materialize.min.css'
import './index.css'


class Home extends Component{
    constructor(){
        super();
    }
    
    UNSAFE_componentWillMount(){
        this.props.getUsers();
    }
    render(){
        //console.log(this.props);
        let users= [];
        if(this.props.users.data){
            users= this.props.users.data.results.map((currentValue, index, array) =>{
                //console.log(index);
                return (
                    <UserItem
                    key={ index }
                    name={ currentValue.name }
                    url= { currentValue.url } />
                )
            })
        }
        if(this.props.users.type === "START_GET_USERS"){
            return(
                <div className="Home-preLoader">
                    <CircleLoader
                        color="#fff"
                        loading={ true }/>
                </div>
            );
        }
        return(
            <div className="Home">
                { users}
                
                
            </div>
        );
    }
}

//Esta funcion convierte el valor de la store que yo quiero
//en propiedades para el componente
function mapStateProps(state){
    return{
        users: state.getUsers
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getUsers
    }, dispatch)
}


export default connect(mapStateProps, mapDispatchToProps)(Home);