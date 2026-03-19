public with sharing class mapController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return[Select Id,Name,Description,
        BillingCity,BillingStreet,BillingState,
        BillingPostalCode,BillingCountry From Account Order By Name Limit 10];
    }
}