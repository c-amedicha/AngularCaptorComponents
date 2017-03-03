<<<<<<< HEAD
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

 
=======
angular.module('captorAngularElements', ['ngAnimate', 'toastr','ngSanitize','angularjs-dropdown-multiselect', 'ui.bootstrap', 'ui.mask','ui.router','ui.tinymce'])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/basicTextControls');
            $stateProvider
                .state('basicTextControls', {
                    url: '/basicTextControls',
                    templateUrl: './views/basicTextControls.html'
            })
            .state('dropdownControls', {
                    url: '/dropdownControls',
                    templateUrl: './views/dropdownControls.html',
                    controller: 'dropdownControls'
            })
            .state('tinyMCEControls',{
                    url: '/tinyMCEControls',
                    templateUrl: './views/tinyMCEControls.html',
                    controller: 'tinyMCEControls'
            });
}]);
>>>>>>> 0951a5706d17cd440343fde661c65a8e608064e6
