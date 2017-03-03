import { SaveButtonController } from './saveButton.controller';
var templateUrl = require('ngtemplate-loader!html-loader!./saveButn.component.html');

export const SaveButtonComponent = {
        templateUrl: templateUrl,
        controller: SaveButtonController,
        controllerAs: 'vm',
        require:{
            parent: '^^form'
        },
        bindings: {
            formName:"@",
            formSubmitMethod:"@",
            label:"@",
            formValid:"="
        }
};