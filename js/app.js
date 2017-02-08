angular.module('captorAngularElements', ['angularjs-dropdown-multiselect', 'ui.bootstrap', 'ui.mask','ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/basicTextControls');
            $stateProvider
                .state('basicTextControls', {
                    url: '/basicTextControls',
                    templateUrl: 'views/basicTextControls.html'
            })
            .state('dropdownControls', {
                    url: '/dropdownControls',
                    templateUrl: 'views/dropdownControls.html',
                    controller: 'dropdownControls'
            });
}]);