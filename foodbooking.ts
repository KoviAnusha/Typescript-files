class foodorder{
    public passname:string="Anu";
    public pnr:number=73673189;
    public ondate:string="21-07-2019";
    public bankacdetails:any={IFSCcode:"SBIN0026171",Phoneno:6278413};
    public cost:number=456;
    public show_menu()
    {
        console.log("showing Menu........");
    }
    public choose_menu()
    {
        console.log("choose your  Menu");
    }
    public start_payment()
    {
        console.log(this.cost+" is to be deducted from your bank account");
        console.log("money deducted");
        console.log("biryani booked");
    }
    public fetchPrevOrders()
        {
            console.log("fetching previous orders... ");
        }
    public getOrderNo()
        {
            this.fetchPrevOrders();
            console.log("Getting order number of order to be cancelled");
        }
    public cancel_order()
    {
        console.log("I want to cancel the order");
        this.getOrderNo();
        console.log("Order cancelled");
    }
    public getPNR()
    {
        console.log("getPNR");
    }
}
var a1:foodorder=new foodorder();
console.log(a1);
console.log(a1.show_menu());
console.log(a1.choose_menu());
console.log(a1.start_payment());
console.log(a1.cancel_order());