public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
   public static List<Account> getAccountList(){
    return [Select Id,Name,Type,Industry From Account Limit 5];
    }

    @AuraEnabled(cacheable=true)
   public static List<Account> typeAccountFilter(String type){
    return[Select Id,Name,Type From Account Where Type = :type Limit 5];
   }

   @AuraEnabled
   public static List<Account> accountName(String searchKey){
        String dta = '%'+searchKey+'%';
        return[Select Id,Name,Type From Account Where Name LIKE :dta Limit 5];
   }
}