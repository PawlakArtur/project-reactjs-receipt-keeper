function items(state = [], action) {
    switch(action.type) {
        case 'ADD_ITEM' :
            console.log("adding item");
            break;
        case 'REMOVE_ITEM':
            console.log("removing item");
            break;
        default:
            return state;
    }
}

export default items;