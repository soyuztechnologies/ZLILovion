sap.ui.define([
    "./BaseController"
],
    function (BaseController) {
        "use strict";

        return BaseController.extend("myswd.swd.zlilovion.controller.MainScreen", {
            onInit: function () {
                let oOwnerComponent = this.getOwnerComponent();
                this.oRouter = oOwnerComponent.getRouter();
                this.oRouter.getRoute("MainScreen").attachPatternMatched(this._fnMainScreenRmh, this);
            
            },
            _fnMainScreenRmh: function(){

            },
            onContinueButton: function(oEvent){
                debugger;
                // let oSource = oEvent.getSource();
                let oRadioButton = this.getView().byId("id-radioButton");
                let oSelectedButton = oRadioButton.getSelectedButton().getProperty("text");
                if(oSelectedButton === 'Instandhaltungsauftrag'){
                    this.oRouter.navTo("Instandhaltungsauftrag");

                }else if(oSelectedButton === 'Kundenauftrag'){
                    this.oRouter.navTo("Kundenauftrag");
                    
                }else if(oSelectedButton === 'Revision'){
                    this.oRouter.navTo("Revision");

                }

            }
        });
    });
