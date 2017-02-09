angular.module('captorAngularElements')
    .component('captorTinymce', {
        templateUrl: './componentViews/tinyMCE.component.html',
        controller: tinymceComponent,
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
            hideDisplay: "@",
            charCount: "@"
        }
    });

    function tinymceComponent(){
        "use strict"
        var self = this;
        self.$onInit = function() {
            self.tinymceOptions = {
                theme: "modern",
                skin: 'captor',
                plugins: 'wordcount link powerpaste autoresize autolink',
                toolbar: "bold italic underline link",
                onChange: function(e) {
                    // put logic here for keypress and cut/paste changes
                    console.log(e);
                },
            };
        }

        self.getContent = function() {
            console.log('Editor content:', self.value);
        };

        self.setContent = function() {
            self.value = 'Time: ' + (new Date());
        };

    };