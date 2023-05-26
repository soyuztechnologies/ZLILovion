sap.ui.define([
    "./BaseController"
],
    function (BaseController) {
        "use strict";

        return BaseController.extend("myswd.swd.zlilovion.controller.SalesOrderDetail", {
            onInit: function () {
                let oOwnerComponent = this.getOwnerComponent();
                this.oRouter = oOwnerComponent.getRouter();
                this.oRouter.getRoute("SalesOrderDetail").attachPatternMatched(this._fnSalesOrderDetailRmh, this);
            
            },
            _fnSalesOrderDetailRmh: function(){

            },
            onNavButtonPress:function(){
                this.oRouter.navTo('SalesOrder');
            }
        });
    });
