import { api, LightningElement, track } from 'lwc';

export default class Person1 extends LightningElement {
@api location;
    @track
    user={
        firstName : "abc",
        lastName :  "xyz"
    
    };
    @api
    updateuser()
    {
        this.user={ 
            firstName :"Harshitha",
            //lastName :"R"
        };


    }
}