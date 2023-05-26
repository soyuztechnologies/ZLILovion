sap.ui.define([
    "./BaseController"
],
    function (BaseController) {
        "use strict";

        return BaseController.extend("myswd.swd.zlilovion.controller.PMOrder", {
            onInit: function () {
                let oOwnerComponent = this.getOwnerComponent();
                this.oRouter = oOwnerComponent.getRouter();
                this.oRouter.getRoute("PMOrder").attachPatternMatched(this._fnPMOrderRmh, this);
            
            },
            _fnPMOrderRmh: function(){
                this.getModel("UIprops").setProperty("/PMOrderData", []);
            },
            onInstaNextScreen: function(oEvent){
                this.oRouter.navTo("PMOrderDetail")
            },

            onNavButtonPress:function(){
                this.oRouter.navTo('MainScreen');
            }
        });
    });
