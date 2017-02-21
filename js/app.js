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