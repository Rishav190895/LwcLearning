public with sharing class CsvController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        try {
            return[Select Id,Name,Phone,AnnualRevenue,Industry From Account];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}