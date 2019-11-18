({
    init : function(component, event, helper) {
        helper.onSearch(component, event, helper);
    },

    doSearch : function(component, event, helper) {
        var params = event.getParam('arguments');
        if (params) {
            component.set("v.boatTypeId", params.boatTypeId);
            helper.onSearch(component, event, helper);
        }
    },

    onBoatSelect : function(component, event, helper) {
        var selectedBoatId = event.getParam('boatId');
        component.set("v.selectedBoatId", selectedBoatId);
    },

})