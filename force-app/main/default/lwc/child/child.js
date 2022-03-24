import { api, LightningElement } from 'lwc';

export default class Child extends LightningElement {   

@api progressvalue;
handlechange(event)
{
    this.progressvalue = event.target.value;
    //creates the event with data
    const selectedevent = new CustomEvent("progressvaluechange",{detail: this.progressvalue});
    //dispatchs event
    this.dispatchEvent(selectedevent);
}




}