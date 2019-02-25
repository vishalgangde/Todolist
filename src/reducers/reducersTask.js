//Reducers , checking the actions
export default (state=[],action) => {
    switch(action.type){
        case 'ADD_TASK':
        state = state.concat(action.payload);
        break;
        case 'DELETE_TASK':
        state = state.splice();
        state.splice(action.payload);
        break;
        default:
        return state;
    };
    
};