angular.module('captorAngularElements')
    .component('captorForm', {
        templateUrl: './componentViews/captorForm.component.html',
        controller: captorFormComponent,
        controllerAs: 'vm',
        bindings: {
            formArray:"<",
            formSubmitMethod:"@"
        }
    });

    function captorFormComponent(){
        "use strict"
        var self = this;
        
        self.$onInit = function() {
            console.log("here");
            console.log(self.formArray);
        }
    };