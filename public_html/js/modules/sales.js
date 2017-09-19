define(() => {
    const itemName = 'formula1';
    const itemQuantity = 10;
    var salesOutput;
    
    var validateItem = (item) => {
        return (item === itemName);
    };
    
    var validateQty = (qty) => {
        return (qty <= itemQuantity);
    };
    
    return {
        saleOfItem: (item, qty) => {
            if(!item) {
                return 'Enter item.';
            }
            if(validateItem(item)) {
                if(!qty) {
                    return `Item ${item} is in inventory. Enter quantity.`;
                }
                if(validateQty(qty)) {
                    if(qty <= 0) {
                        salesOutput = `Item ${item} is in inventory. ${qty} is not a valid order quantity.`;
                    } else {
                        salesOutput = `Sold ${qty} units of ${item}. Remaining ${itemQuantity - qty} units.`;
                    }
                } else {
                    salesOutput = `Stock is not enough for ${item}. Available: ${itemQuantity} units.`;
                }
            } else {
                salesOutput = `Item ${item} is not in inventory. Enter valid item.`;
            }
            return salesOutput;
        }
    }
    
})