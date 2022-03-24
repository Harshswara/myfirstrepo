import { LightningElement, track } from 'lwc';

export default class Parent extends LightningElement { 

    @track  progressvalue = 0;
    handleprogressvaluechange(event){
        this.progressvalue=event.detail;

    }
}
