import { TinyMCEController } from './tinyMCE.controller';
var templateUrl = require('ngtemplate-loader!html-loader!./tinyMCEText.component.html');

export const TinyMCEComponent = {
        templateUrl: templateUrl,
        controller: TinyMCEController,
        controllerAs: 'vm',
        require: {
            parent: '^^form'
        },
        bindings: {
            label: "@",
            name: "@",
            value: "=",
            isRequired: "@",
            maxcharCount: "@",
            disabledBlock: "@"
        }
    };