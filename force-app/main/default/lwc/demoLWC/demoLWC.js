import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class demoLWC extends LightningElement {
    showerrorToast() {
        const event = new ShowToastEvent({
            title :'Toast error',
            message:'someunexpected error',
            variant:'error',
            mode:'dismissable',
        });
        this.dispatchEvent(event);
    }

    showSuccessToast() {
        const event = new ShowToastEvent({
            title: 'Toast Success',
            message:'operation successful',
            variant:'success',
            mode:'dismissable',
        });
        this.dispatchEvent(event);
    }

    showwarningtoast() {
        const event = new ShowToastEvent({
            title :'Toast warning',
            message:
                'Unexpected Success',
            variant:'warning',
           mode:'pester',
        });
        this.dispatchEvent(event);
    }

    showinfo() {
        const event = new ShowToastEvent({
            title: 'Toast Info',
            message:
                'Info Message',
            variant:'info',
             mode:'sticky',
        });
        this.dispatchEvent(event);
    }
}
//cooment