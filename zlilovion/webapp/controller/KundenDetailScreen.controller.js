sap.ui.define([
    "./BaseController"
],
    function (BaseController) {
        "use strict";

        return BaseController.extend("myswd.swd.zlilovion.controller.KundenDetailScreen", {
            onInit: function () {
                let oOwnerComponent = this.getOwnerComponent();
                this.oRouter = oOwnerComponent.getRouter();
                this.oRouter.getRoute("KundenDetailScreen").attachPatternMatched(this._fnKundenDetailScreenRmh, this);
            
            },
            _fnKundenDetailScreenRmh: function(){

            }
        });
    });
