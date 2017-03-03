// import angular from 'angular';
import { InputTextComponent } from '../components/inputText/inputText.component';
import { InputDropdownComponent } from '../components/inputDropdown/inputDropdown.component';
import { TinyMCEComponent } from '../components/tinyMce/tinyMCE.component';
import { SaveButtonComponent } from '../components/saveButton/saveButton.component';
import { DatepickerComponent } from '../components/datetimePicker/datepicker.component';
import { RadioButtonComponent } from '../components/radioButton/radioButton.component';
require('../sass/style.scss');

export default angular.module('captorAngularElements', ['ngAnimate', 'toastr','ngSanitize','ui.bootstrap', 'ui.mask','ui.tinymce','angularjs-dropdown-multiselect', 'ui.bootstrap.datetimepicker'])
.component('captorInputText', InputTextComponent)
.component('captorMultiselectDropdown', InputDropdownComponent)
.component('captorTinymce', TinyMCEComponent)
.component('captorSavebutton', SaveButtonComponent)
.component('captorDatepicker', DatepickerComponent)
.component('captorRadiobutton', RadioButtonComponent)
.name;

angular.module('captorAngularElements').config(['$provide', Decorate]);
function Decorate($provide) {
  $provide.decorator('$locale', function ($delegate) {
    var value = $delegate.DATETIME_FORMATS;
    value.SHORTDAY = [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ];
    return $delegate;
  });
};

 