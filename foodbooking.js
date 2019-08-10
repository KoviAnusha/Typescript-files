var foodorder = /** @class */ (function () {
    function foodorder() {
        this.passname = "Anu";
        this.pnr = 73673189;
        this.ondate = "21-07-2019";
        this.bankacdetails = { IFSCcode: "SBIN0026171", Phoneno: 6278413 };
        this.cost = 456;
    }
    foodorder.prototype.show_menu = function () {
        console.log("showing Menu........");
    };
    foodorder.prototype.choose_menu = function () {
        console.log("choose your  Menu");
    };
    foodorder.prototype.start_payment = function () {
        console.log(this.cost + " is to be deducted from your bank account");
        console.log("money deducted");
        console.log("biryani booked");
    };
    foodorder.prototype.fetchPrevOrders = function () {
        console.log("fetching previous orders... ");
    };
    foodorder.prototype.getOrderNo = function () {
        this.fetchPrevOrders();
        console.log("Getting order number of order to be cancelled");
    };
    foodorder.prototype.cancel_order = function () {
        console.log("I want to cancel the order");
        this.getOrderNo();
        console.log("Order cancelled");
    };
    foodorder.prototype.getPNR = function () {
        console.log("getPNR");
    };
    return foodorder;
}());
var a1 = new foodorder();
console.log(a1);
console.log(a1.show_menu());
console.log(a1.choose_menu());
console.log(a1.start_payment());
console.log(a1.cancel_order());
