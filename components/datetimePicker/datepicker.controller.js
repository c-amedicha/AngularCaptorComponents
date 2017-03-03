class DatepickerController{
    constructor() {}

    $onInit() {
        this.placeholder = (this.placeholder == undefined ? "Select Date" : this.placeholder);
        this.name = (this.name == undefined ? "datepicker" : this.name);
        this.dateFormat = (this.dateFormat == undefined ? "MM/dd/yyyy" : this.dateFormat);
        this.openDatepicker = false;
        this.initDate = new Date();
        this.minDate = (this.minDate != undefined ? (new Date(this.minDate)) : null );
        this.maxDate = (this.maxDate != undefined ? (new Date(this.maxDate)) : null );
        this.dateOptions = {
            startingDay: 0,
            showWeeks: false,
            formatDay: 'd',
            initDate: this.initDate
            // minDate: this.minDate,
            // maxDate: this.maxDate
        };
            
        if (this.isRequired == "true") {
            this.requiredVal = true;
        }else{
            this.requiredVal = false;
        }
        // angular.element(document).find('.uib-datepicker-popup.')
        this.validateCaptorForm();

    }

    open($event,opened) {
        $event.preventDefault();
        $event.stopPropagation();
        this.dateOpened = true;
    }

    validateCaptorForm() {
        this.validationError = '';
        if (this.requiredVal && (this.value == undefined || this.value == "" )) {
            this.validationError = "This is a required field ";
            this.parent.$setValidity(this.name, false);
            return false;
        }
        this.validationError = '';
        this.parent.$setValidity(this.name, true);
        return true;
    } 

    onclick(){
        this.validateCaptorForm();
    }
    onChange(){
        this.validateCaptorForm();
    }
    openPicker(){
        this.openDatepicker = true;
    }
}

export { DatepickerController };