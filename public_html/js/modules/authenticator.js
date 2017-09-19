define(() => {
    const cBuyerName = 'anirbanm';
    var auth, msg;
    var authenticate = (buyerName) => {
        if(buyerName) {
            if(buyerName === cBuyerName) {
                msg = `User ${buyerName} is authenticated`;
                auth = true;
            } else {
                msg = `User ${buyerName} is not valid`;
                auth = false;
            }
        } else {
            msg = 'Cannot proceed with sales without buyer';
            auth = false;
        }
        return {
            auth,
            msg
        };
    };
    return {
        authenticate
    };
})