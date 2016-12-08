export function addReceipt() {
    return {
        type: 'ADD_RECEIPT'
    }
}

export function removeReceipt(receiptId) {
    return {
        type: 'REMOVE_RECEIPT',
        receiptId
    }
}

export function addItem(receiptId, name, amount, price) {
    return {
        type: 'ADD_ITEM',
        receiptId,
        name,
        amount,
        price
    }
}

export function removeItem(receiptId, i) {
    return {
        type: 'REMOVE_ITEM',
        receiptId,
        i
    }
}