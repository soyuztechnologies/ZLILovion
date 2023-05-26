sap.ui.define([
    "./BaseController"
],
    
    function (BaseController) {
        "use strict";

        return BaseController.extend("myswd.swd.zlilovion.controller.Kundenauftrag", {
            onInit: function () {
                let oOwnerComponent = this.getOwnerComponent();
                this.oRouter = oOwnerComponent.getRouter();
                this.oRouter.getRoute("Kundenauftrag").attachPatternMatched(this._fnKundenauftragRmh, this);
            
            },
            _fnKundenauftragRmh: function(){

            },
            onKundnnextScreen: function(oEvent){
                this.oRouter.navTo("KundenDetailScreen")
            },
            onNavButtonPress:function(){
                this.oRouter.navTo("MainScreen");
            }
        });
    });
