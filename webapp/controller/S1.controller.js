sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
	"use strict";

	return Controller.extend("demo.odata.controller.S1", {

		onInit: function() {
			this._oRouter = UIComponent.getRouterFor(this);
		},

		onListItemPress: function(oEvent) {
			var oListItem = oEvent.getSource();
			var oContext = oListItem.getBindingContext();
			var oCategory = oContext.getObject();
			var sCategoryId = oCategory.ID;
			
			
			this._oRouter.navTo('products',{
				category_id: sCategoryId
			});
		}

	});

});



