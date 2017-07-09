sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function(Controller, UIComponent, JSONModel) {
	"use strict";

	return Controller.extend("demo.odata.controller.S2", {

		onInit: function() {
			this._oRouter = UIComponent.getRouterFor(this);
			this._oList = this.byId('product_list');

			this._oRouter.getRoute('products').attachPatternMatched(this._onPatternMatched, this);

		},

		_onPatternMatched: function(oEvent) {
			var oParameters = oEvent.getParameters();
			var oArguments = oParameters.arguments;
			var sCategoryId = oArguments.id;

			this.getView().bindElement({
				path: `/Categories(${sCategoryId})`,
			});

		}

	});

});