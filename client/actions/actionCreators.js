export function addReceipt(id, title, shop, address, date, code) {
    return {
        type: 'ADD_RECEIPT',
        id,
        title,
        shop,
        address,
        date,
        code
    }
}

export function removeReceipt(i) {
    return {
        type: 'REMOVE_RECEIPT',
        i
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