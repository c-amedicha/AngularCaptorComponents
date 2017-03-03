class RadioButtonController {
    constructor() {

    }
    $onInit() {

        if (this.isRequired == "true") {
            this.requiredVal = true;
        }else{
            this.requiredVal = false;
        }
        console.log(this.value);
        this.validateCaptorForm();
    }

    validateCaptorForm() {
        this.validationError = '';
        if (this.requiredVal) {
            this.validationError = "This is a required field ";
            return false;
        }
        this.validationError = '';
        return true;
    }
}

export { RadioButtonController };