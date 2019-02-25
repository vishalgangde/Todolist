import React from 'react';
import Header from './Header';
import TaskBar from './TaskBar';
import TaskList from './TaskList';

class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <TaskBar />
                <TaskList />
                
            </div>
        );
    };
};

export default App;