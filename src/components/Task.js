import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {deleteTask} from '../actions';
class Task  extends React.Component{
    render(){
        return(
            <tr>
                <td>
                    {this.props.tasks}
                </td>
                <td>
                    <button onClick={()=>{this.props.deleteTask(this.props.id)}}>Delete</button>
                </td>
            </tr>
        );
    }
};

function mapStateToProps(state){
    return bindActionCreators({deleteTask},state);

}

export default connect(()=>{return {};} ,mapStateToProps)(Task);