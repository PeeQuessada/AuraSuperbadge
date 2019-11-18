({
    onFullDetails : function(component, event, helper) {
        var boat = component.get("v.boat");
        var navEvent = $A.get("e.force:navigateToSObject");
        navEvent.setParams({
            recordId: boat.Id,
            slideDevName: "detail"
        });
        navEvent.fire(); 
    },

})