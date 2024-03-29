public with sharing class CertPopularity {
    @AuraEnabled
	public static List < Certification__c > getCertPopularity() {
		return [
			SELECT Id, Name, Number_of_Certified_Professionals__c
			FROM Certification__c
            WITH SECURITY_ENFORCED
			ORDER BY Number_of_Certified_Professionals__c
		];
	}
}