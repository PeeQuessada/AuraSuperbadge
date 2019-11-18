public with sharing class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        if(boatTypeId != null && boatTypeId != ''.trim())
            return [SELECT Id, Name, picture__c, Contact__r.Name FROM Boat__c WHERE BoatType__c =: boatTypeId];
        else
            return [SELECT Id, Name, picture__c, Contact__r.Name FROM Boat__c];
    }

}