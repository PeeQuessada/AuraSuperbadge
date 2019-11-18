({
    onBoatSelected  : function(component, event, helper) {
        var currentRecord = component.find("service");
        var updateSelected = event.getParam("boat");
        
        component.set("v.Id", updateSelected.Id);
        component.set("v.boat", updateSelected);
        currentRecord.set("v.Id", updateSelected.Id);
        currentRecord.reloadRecord();
    },
    
    onRecordUpdated : function(component, event, helper) {
        var reviewcomponent = component.find('reviewcomponent');
        if(typeof reviewcomponent != 'undefined')
            reviewcomponent.refresh();
        
    },

    onBoatReviewAdded : function(component, event, helper) {
        var reviews = component.find("reviews");
        if (reviews) {
            reviews.refresh();
        }

        component.find("tabs").set('v.selectedTabId', 'boatreviewtab');
    }

})