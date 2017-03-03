class InputDropdownController{
    constructor() {}

    $onInit() {

            // if(this.singleSelect == "true"){
                // this.selectedVal = {};
                this.showCheckUncheck = false;
            //     this.template = '<b>{{option.Description}}</b>';
                this.dropDownClass = 'customDropdown';
            // }else{
                this.selectedVal = [];
            //     this.showCheckUncheck = true;
            //     this.template='';
            //     this.dropDownClass = 'customDropdownMultiSelect';
            // }
            
            this.dropdownSettings = {
                    externalIdProp: '',
                    buttonClasses: 'form-control captorDropdownSingleSelect',
                    enableSearch: true,
                    scrollable: true,
                    smartButtonMaxItems: 4,
                    selectionLimit:1,
                    keyboardControls: true,
                    displayProp: 'Description', 
                    idProp: 'Value',
                    showCheckAll: this.showCheckUncheck,
                    showUncheckAll: this.showCheckUncheck
                };

            // if(this.singleSelect == "true"){
            //     this.dropdownSettings.template = this.template
            // }

            this.translationTexts = {
                buttonDefaultText: this.placeholder
            };
            var self = this;
            this.dropdownEvents = {
                onSelectionChanged: function(item){
                    self.validateCaptorForm();
                }
            };

            if (this.isRequired) {
                this.requiredVal = this.isRequired;
            }
            this.validateCaptorForm();
    }

    validateCaptorForm() {
            this.validationError = '';
            if (this.requiredVal && 
                    ((this.singleSelect == "false" && this.selectedVal.length == 0) || 
                     (this.singleSelect == "true" && Object.keys(this.selectedVal).length == 0))) 
            {
                this.validationError = "This is a required field ";
                this.parent.$setValidity(this.name, false);
                return false;
            }
            this.validationError = '';
            this.parent.$setValidity(this.name, true);
            return true;
        };   
}

export { InputDropdownController };