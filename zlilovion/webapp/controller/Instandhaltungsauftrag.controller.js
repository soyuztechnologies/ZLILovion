sap.ui.define([
    "./BaseController"
],
    function (BaseController) {
        "use strict";

        return BaseController.extend("myswd.swd.zlilovion.controller.Instandhaltungsauftrag", {
            onInit: function () {
                let oOwnerComponent = this.getOwnerComponent();
                this.oRouter = oOwnerComponent.getRouter();
                this.oRouter.getRoute("Instandhaltungsauftrag").attachPatternMatched(this._fnInstandhaltungsauftragRmh, this);
            
            },
            _fnInstandhaltungsauftragRmh: function(){

            },
            onInstaNextScreen: function(oEvent){
                this.oRouter.navTo("InstaDetailScreen")
            }
        });
    });
