sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function (Controller) {
    'use strict';
    return Controller.extend("myswd.swd.zlilovion.controller.BaseController", {
        getModel: function (sModelName) {
            if (sModelName) {
                return this.getOwnerComponent().getModel(sModelName);
            } else {
                return this.getOwnerComponent().getModel();
            }
        },
        getResourceBundle: function () {
            let oResourceModel = this.getModel('i18n');
            let oResourceBundle = oResourceModel.getResourceBundle();
            return oResourceBundle;
        },
        
    });

});