import { InputDropdownController } from './inputDropdown.controller';
var templateUrl = require('ngtemplate-loader!html-loader!./dropdown.component.html');

export const InputDropdownComponent = {
        templateUrl: templateUrl,
        controller: InputDropdownController,
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
            value: "<",
            singleSelect:"@"
        }
    };