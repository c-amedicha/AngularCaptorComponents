import { DatepickerController } from './datepicker.controller';
var templateUrl = require('ngtemplate-loader!html-loader!./datetimePicker.component.html');

export const DatepickerComponent = {
        templateUrl: templateUrl,
        controller: DatepickerController,
        controllerAs: 'vm',
        require:{
            parent: '^^form'
        },
        bindings: {
            dateFormat:"@",
            minDate:"@",
            maxDate:"@",
            hideTime:"<",
            dateDisabled:"@",
            isDisabled:"@",
            minTime:"@",
            maxTime:"@",
            readonlyDate:"@",
            readonlyTime:"@",
            showMeridian:"@",
            label: "@",
            placeholder: "@",
            name: "@",
            value: "=",
            isRequired: "@",
        }
    };