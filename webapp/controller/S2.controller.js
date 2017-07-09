sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
	"use strict";

	return Controller.extend("demo.odata.controller.S2", {

		onInit: function() {
			this._oList = this.byId("list_products");

			// @type sap.m.routing.Router
			this._oRouter = UIComponent.getRouterFor(this);
			this._oRouter.attachRoutePatternMatched(this._onRouteMatched, this);
		},
		
		_onRouteMatched: function(oEvent){
			var oParameters = oEvent.getParameters();
			var oArguments = oParameters.arguments;
			var sCategoryId = oArguments.category_id;
			
			
			this.getView().bindElement(`/Categories(${sCategoryId})`,{
				
			});
			
			// this._oList.bindItems({
			// 	path: `/Categories(${sCategoryId})/Products`,
			// 	template: new sap.m.StandardListItem({
			// 		title: '{Name}'
			// 	})
			// });
			
		}

	});

});