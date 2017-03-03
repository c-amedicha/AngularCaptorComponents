import { RadioButtonController } from './radioButton.controller';
var templateUrl = require('ngtemplate-loader!html-loader!./radio.component.html');

export const RadioButtonComponent = {
        templateUrl: templateUrl,
        controller: RadioButtonController,
        controllerAs: 'vm',
        require:{
            parent: '^^form'
        },
        bindings: {
            label: "@",
            name: "@",
            value: "=",
            isRequired: "@"
        }
    };