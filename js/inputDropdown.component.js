angular.module('captorAngularElements')
    .component('captorMultiselectDropdown', {
        templateUrl: './componentViews/dropdown.component.html',
        controller: dropdownComponent,
        controllerAs: 'vm',
        bindings: {
            name: "@",
            label: "@",
            placeholder: "@",
            isRequired: "@",
            selectedVal: "=",
            value: "<"
        }
    });

    function dropdownComponent(){
        "use strict"
        this.$onInit = function() {
            
            this.focusCount = 0;
            this.hidden=false;
            this.selectedVal = [];
            var placeholderText = this.placeholder;
            this.dropdownSettings = {
                    externalIdProp: '',
                    buttonClasses: 'form-control captorDropdownSingleSelect',
                    enableSearch: true,
                    scrollable: true,
                    smartButtonMaxItems: 4,
                    keyboardControls: true,
                    displayProp: 'Description', 
                    idProp: 'Value'
                };

            // settings for single select:
            // this.selectedVal = {};
            // showCheckAll: false,
            // showUncheckAll: false,
            // template: '<b>{{option.label}}</b>',

            this.translationTexts = {
                buttonDefaultText: this.placeholder
            };

            if (this.isRequired) {
                this.requiredVal = this.isRequired;
            }
            this.validateCaptorForm();
        }
        this.validateCaptorForm = function() {
            this.validationError = '';
            if (this.requiredVal && this.selectedVal.length == 0) {
                this.validationError = "This is a required field ";
                return false;
            }
            this.validationError = '';
            return true;
        };


        this.onSelect = function($item, $model, $label) {
            this.selectedVal = angular.copy($item);
        }

        this.focusTextBox = function(id){
            if(this.focusCount < 1){
                document.querySelector("#" + id).focus();
                this.focusCount++;
            }else{
                document.querySelector("#" + id).blur();
                this.focusCount = 0;
            }
            
        }
        this.display=function(){
            this.hidden=true;
        }
    }