//Action Creators 
export const addTask = (task) =>{
    //console.log(task);
    return{
        type:"ADD_TASK",
        payload: task
    };
};

export const deleteTask = (taskid) =>{
    return{
        type: 'DELETE_TASK',
        payload: taskid
    };
};



export default {addTask,deleteTask};