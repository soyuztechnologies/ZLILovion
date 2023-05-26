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

                this.openMainScreenOptionsDailog();
            },
            openMainScreenOptionsDailog:function(){
                if (!this.mainDailog) {
                    this.mainDailog = new sap.ui.xmlfragment("myswd.swd.zlilovion.fragments.MainScreen", this);
                    this.getView().addDependent(this.mainDailog);
                }

                this.mainDailog.open();
            },
            onContinueButton: function(oEvent){
                debugger;
                // let oSource = oEvent.getSource();
                let oRadioButton = oEvent.getSource().getParent().getContent()[0];
                let oSelectedButton = oRadioButton.getSelectedButton().getProperty("text");
                if(oSelectedButton === 'Instandhaltungsauftrag'){
                    this.oRouter.navTo("Instandhaltungsauftrag");

                }else if(oSelectedButton === 'Kundenauftrag'){
                    this.oRouter.navTo("Kundenauftrag");
                    
                }else if(oSelectedButton === 'Revision'){
                    this.oRouter.navTo("Revision");

                }
                this.mainDailog.close();

            }
        });
    });
