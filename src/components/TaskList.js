import React from 'react';
import { connect } from 'react-redux';
import { addTask }  from '../actions';
//import { bindActionCreators } from 'redux';


class TaskList extends React.Component {
    renderData() {

       // console.log(this.props.tasks);
        return this.props.tasks.map((data,id)=>{
            return(
                <div className="item" key={id}>
                 <div className="right floated content">
                     <button className="ui button primary" onClick={() =>
                     this.props.addTask(data)}></button>
                 </div>
                </div>
            );
        });
      
    }
    
    render() {
        return (
            <div>{this.renderData()}</div>
        );
    }
};

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    };
}

export default connect(mapStateToProps)(TaskList);