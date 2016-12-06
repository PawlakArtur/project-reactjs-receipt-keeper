function receipts(state = [], action) {
    switch(action.type) {
        case 'ADD_RECEIPT' :
            console.log("adding receipt");
            return [...state, {
                id: state.length,
                title: "Zakupy w Biedronce",
                shop: "Biedronka",
                address: "Warszawa, ul. Marszałkowska",
                date: "03-11-2016",
                code: "kdnsaij432432"
                }];
        case 'REMOVE_RECEIPT':
            console.log("removing receipt");
            return state;
        default:
            return state;
    }
}

export default receipts;