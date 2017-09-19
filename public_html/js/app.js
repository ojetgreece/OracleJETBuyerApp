define(["ojs/ojcore", "knockout", "buyer", "ojs/ojknockout", "ojs/ojinputtext"], function (oj, ko, buyer) {
    return function () {
        ko.components.register("salescomp", {
           viewModel: function() {
               this.buyerName = ko.observable('');
               this.itemName = ko.observable('');
               this.itemQuantity = ko.observable('');
               this.salesOutput = ko.computed(() => {
                    return buyer.sellItem(this.buyerName(), this.itemName(), this.itemQuantity());
                }, this);
           },
           template: { require: 'text!views/app.html' }
        });
        
    };
});