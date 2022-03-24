import { LightningElement,api,track } from 'lwc';
import AccountNumber from '@salesforce/schema/Account.AccountNumber';
import AnnualRevenue from '@salesforce/schema/Account.AnnualRevenue';





export default class Lsdemo extends LightningElement {
    @api recordid;
    @api objectApiname;

    @track fields=[AccountNumber,AnnualRevenue];
    connectedCallback(){
        this.objectApiname=this.objectApiname;
        
    }
    
}