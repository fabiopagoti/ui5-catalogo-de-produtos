sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function(Controller, MessageToast, MessageBox) {
	"use strict";

	return Controller.extend("demo.odata.controller.S3", {

		onSave: function(oEvent) {
			var oModel = this.getView().getModel();

			var oNew = {
				ID: this.byId('input_id').getValue(),
				Name: this.byId('input_nome').getValue(),
			};

			var oSettings = {
				success: function(oData, response) {
					MessageToast.show('Sucesso');
				}.bind(this),
				error: function(err) {
					MessageBox.error('Erro');
				}.bind(this)
			};

			oModel.create('/Categories', oNew, oSettings);
		},

		onCancel: function(oEvent) {

		}
	});

});