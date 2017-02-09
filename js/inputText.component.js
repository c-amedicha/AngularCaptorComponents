angular.module('captorAngularElements')
    .component('captorInputText', {
        templateUrl: './componentViews/textbox.component.html',
        controller: InputTextComponent,
        controllerAs: 'vm',
        require:{
            parent: '^^form'
        },
        bindings: {
            label: "@",
            minimumLength: "@",
            maximumLength: "@",
            placeholder: "@",
            type: "@",
            name: "@",
            value: "=",
            isRequired: "@",
            hideDisplay: "@"
        }
    });

function InputTextComponent() {
    "use strict"

    this.$onInit = function() {
        this.mask = "",
        this.regex = "",
        this.maskValue = false,
        this.readOnlyValue = false,
        this.readOnlyVal = "";
       
        if (!this.maximumLength) {
            this.maximumLength = 200;
        }
        if (this.isRequired) {
            this.requiredVal = this.isRequired;
        }

        if (this.type == "email") {
            this.regex = "/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/";
        } else {
            this.mask = "";
            this.regex = "";
        }

        //for readOnly input with hidden values except last 4 digits:
        if (this.type == "phone" || this.type == "ssn") 
        {   
            if(this.type == "phone"){
                this.mask = "(999) 999-9999";
            }else if(this.type == "ssn"){
                this.mask = "999-99-9999";
            }
            if(this.hideDisplay && this.value) {
                this.mask = "";
                this.readOnlyValue = true;
                this.readOnlyVal = this.value;
                if (this.type == "ssn") {
                    this.readOnlyVal = "XXX-XX-" + (this.readOnlyVal).toString().slice(-4);
                    
                }else if(this.type == "phone"){
                    this.readOnlyVal = "(XXX) XXX-" + (this.readOnlyVal).toString().slice(-4);
                }
                this.value = this.readOnlyVal;
            } 
            this.type = "text";
        }

        this.validateCaptorForm();
    };
    this.onChange = function() {
        try {
            if (this.value && this.maximumLength && this.value.length > this.maximumLength) {
                this.value = this.value.substring(0, this.maximumLength);
            }
        } catch (e) {
            this.value = '';
        }
        this.validateCaptorForm()
    };
    this.validateCaptorForm = function() {
        this.validationError = '';
        if (this.requiredVal && !this.value) {
            this.validationError = "This is a required field ";
            return false;
        }
        if (this.value && this.minimumLength && this.value.length < this.minimumLength) {
            this.validationError = "has a minium length of " + this.minimumLength;
            return false;
        }
        if (this.type == "email" && this.value) {
             var regex =new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm);
            this.validationError =  "This Email Id is invalid";
            return regex.test(this.value);
        }
        this.validationError = '';
        return true;
    };
}