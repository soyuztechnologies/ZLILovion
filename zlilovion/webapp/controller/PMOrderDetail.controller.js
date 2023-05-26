sap.ui.define([
    "./BaseController"
],
    function (BaseController) {
        "use strict";

        return BaseController.extend("myswd.swd.zlilovion.controller.PMOrderDetail", {
            onInit: function () {
                let oOwnerComponent = this.getOwnerComponent();
                this.oRouter = oOwnerComponent.getRouter();
                this.oRouter.getRoute("PMOrderDetail").attachPatternMatched(this._fnPMOrderDetailRmh, this);
            
            },
            _fnPMOrderDetailRmh: function(){

            },
            onNavButtonPress:function(){
                this.oRouter.navTo('PMOrder');
            }
        });
    });
