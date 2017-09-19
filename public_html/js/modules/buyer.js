define(["authenticator", "sales"], (authenticator, sales) => {
    return {
        sellItem: (buyerName, itemName, itemQuantity) => {
            if(buyerName) {
                var {auth, msg} = authenticator.authenticate(buyerName);
                if(auth) {
                    return `${msg}. ${sales.saleOfItem(itemName, itemQuantity)}`;
                } else {
                    return msg;
                }
            } else {
                return `Enter buyer name.`;
            }
        }
    };
})