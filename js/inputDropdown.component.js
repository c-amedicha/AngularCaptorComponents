angular.module('captorAngularElements')
    .component('captorMultiselectDropdown', {
        templateUrl: './componentViews/dropdown.component.html',
        controller: dropdownComponent,
        controllerAs: 'vm',
        require:{
            parent: '^^form'
        },
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
        this.validateCaptorForm = function() {
            this.validationError = '';
            if (this.requiredVal && this.selectedVal.length == 0) {
                this.validationError = "This is a required field ";
                this.parent.$setValidity('drpDwn', false);
                return false;
            }
            this.validationError = '';
            this.parent.$setValidity('drpDwn', true);
            return true;
        };        
    }