sap.ui.define([
    "./BaseController"
],
    function (BaseController) {
        "use strict";

        return BaseController.extend("myswd.swd.zlilovion.controller.InstaDetailScreen", {
            onInit: function () {
                let oOwnerComponent = this.getOwnerComponent();
                this.oRouter = oOwnerComponent.getRouter();
                this.oRouter.getRoute("InstaDetailScreen").attachPatternMatched(this._fnInstaDetailScreenRmh, this);
            
            },
            _fnInstaDetailScreenRmh: function(){

            },
            onNavButtonPress:function(){
                this.oRouter.navTo('Instandhaltungsauftrag');
            }
        });
    });
