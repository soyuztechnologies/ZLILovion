sap.ui.define([
    "./BaseController"
],
    function (BaseController) {
        "use strict";

        return BaseController.extend("myswd.swd.zlilovion.controller.Revision", {
            onInit: function () {
                let oOwnerComponent = this.getOwnerComponent();
                this.oRouter = oOwnerComponent.getRouter();
                this.oRouter.getRoute("Revision").attachPatternMatched(this._fnRevisionRmh, this);
            
            },
            _fnRevisionRmh: function(){
                
            }
        });
    });
