import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../actions/';

 class TaskBar extends React.Component{
    sub(){
        
        if(this.input.value !== ""){
            this.props.addTask(this.input.value);
            console.log(this.input.value,"here");
        }
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="add your task here" value="aaa" />
                <button onClick={this.sub()}>Add Task</button>
            </div>
        );
    }
};

function mapStateToProps(state){
    return {
        data:state.tasks
    };
}

export default connect(mapStateToProps,addTask)(TaskBar);