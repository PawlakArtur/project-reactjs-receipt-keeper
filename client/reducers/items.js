function receiptItems(state = [], action) {
    switch(action.type) {
        case 'ADD_ITEM' :
            return [
                ...state,{
                name: action.name,
                price: action.price,
                amount: action.amount
            }];
        case 'REMOVE_ITEM':
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ];
        default:
            return state;
    }
}

function items(state = [], action) {
    if(typeof action.receiptId !== 'undefined') {
        return {
            ...state,
            [action.receiptId]: receiptItems(state[action.receiptId], action)
        }
    }
    return state;
}

export default items;