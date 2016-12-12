function receipts(state = [], action) {
    console.log(action);
    switch(action.type) {
        case 'ADD_RECEIPT' :
            return [...state, {
                id: action.id,
                title: action.title,
                shop: action.shop,
                address: action.address,
                date: action.date,
                code: action.code
                }];
        case 'REMOVE_RECEIPT':
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ];
        default:
            return state;
    }
}

export default receipts;