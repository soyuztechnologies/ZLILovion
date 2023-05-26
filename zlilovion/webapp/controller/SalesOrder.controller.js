sap.ui.define([
    "./BaseController"
],
    
    function (BaseController) {
        "use strict";

        return BaseController.extend("myswd.swd.zlilovion.controller.SalesOrder", {
            onInit: function () {
                let oOwnerComponent = this.getOwnerComponent();
                this.oRouter = oOwnerComponent.getRouter();
                this.oRouter.getRoute("SalesOrder").attachPatternMatched(this._fnSalesOrderRmh, this);
            
            },
            _fnSalesOrderRmh: function(){
                this.getModel("UIprops").setProperty("/SalesOrderData", []);
            },
            onKundnnextScreen: function(oEvent){
                this.oRouter.navTo("SalesOrderDetail")
            },
            onNavButtonPress:function(){
                this.oRouter.navTo("MainScreen");
            }
        });
    });
