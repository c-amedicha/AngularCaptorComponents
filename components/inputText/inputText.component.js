import { InputTextController } from './inputText.controller';
var templateUrl = require('ngtemplate-loader!html-loader!./textbox.component.html');

export const InputTextComponent = {
        templateUrl: templateUrl,
        controller: InputTextController,
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
    };