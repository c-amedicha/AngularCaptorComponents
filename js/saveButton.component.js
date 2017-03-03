angular.module('captorAngularElements')
    .component('captorSavebutton', {
        templateUrl: './componentViews/saveButton.component.html',
        controller: SaveButtonComponent,
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
    });

    function SaveButtonComponent(toastr){
        "use strict"
        var self = this;
        self.parentForm = "";
        self.$onInit = function() {
            console.log(self.parent);
            console.log(self.formValid);
            self.parentForm = self.parent;
            self.formValid = self.parent.$valid;
        }
        self.save = function(myForm) {
            console.log(myForm.$valid);
            if (!myForm.$valid) {
                myForm.$setSubmitted();
                console.log(self.parent);
                return;
            } else {
                toastr.success('Form Submitted Successfully!!', {
                    'timeOut': 3000,
                    'progressBar': false,
                    'position-class': 'toast-top-right',
                    'target': 'body'
                });
            }
        }
    };