public with sharing class OpportunityController {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunityList(){
        return [Select StageName From Opportunity];
    }
}