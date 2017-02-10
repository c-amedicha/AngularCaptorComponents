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
            name: "@",
            value: "=",
            isRequired: "@",
            maxcharCount: "@"
        }
    });

    function tinymceComponent($timeout){
        "use strict"
        var self = this;
        self.$onInit = function() {
            self.rem_Count = 0,
            self.char_Count= 0;

            if (self.isRequired) {
                self.requiredVal = self.isRequired;
            }

            self.tinymceOptions = {
                theme: "modern",
                skin: 'captor',
                plugins: 'wordcount link powerpaste autoresize autolink',
                default_link_target: "_blank",
                extended_valid_elements : "a[href|target=_blank]",
                oninit: "setPlainText",
                paste_as_text: true,
                spellchecker_rpc_url: 'http://crtec0089169.cr.lcl:8080/ephox-spelling',
                spellchecker_language: 'en',
                autoresize_min_height: 150,
                autoresize_max_height: 150,
                powerpaste_word_import: 'clean',
                powerpaste_html_import: 'merge',
                wordcount_cleanregex: /[0-9.(),;:!?%#$?\x27\x22_+=\\/\-]*/g,
                browser_spellcheck: true,
                menubar: false,
                toolbar: "bold italic underline link",
                default_link_target: "_blank",
                link_assume_external_targets: true,
                style_formats: [
                    { title: 'Bold text', inline: 'b' },
                    { title: 'Example 1', inline: 'span', classes: 'example1' },
                    { title: 'Example 2', inline: 'span', classes: 'example2' },
                    { title: 'Table styles' },
                    { title: 'Table row 1', selector: 'tr', classes: 'tablerow1' }
                ],
                link_class_list: [{ title: 'Hyperlink', value: 'tinymce-hyperlink' }],
                init_instance_callback: function (editor) {
                    editor.on('KeyUp KeyDown LoadContent KeyPress Change NodeChange MouseOver', function (e) {
                        var key = e.keyCode;
                        var trimCount = 0;
                        if ((key == 8) || (key == 46) || (key == 88) || (key == 67)) {

                        }else{
                            self.char_Count = self.getCharCount(editor.getBody().textContent);
                            self.rem_Count =  self.maxcharCount - self.char_Count;
                            
                            if ( self.char_Count > self.maxcharCount) {

                                var spCount = self.getCountWithoutSpaces(editor.getBody().textContent, self.maxcharCount);
                               // self.value = self.value.slice(0, self.maxcharCount + spCount);
                               self.value=editor.getBody().textContent;
                               self.value=(self.value).substring(0, parseInt(self.maxcharCount) + spCount);
                                e.stopPropagation();
                                e.preventDefault();
                            }else{
                                trimCount = self.trimCount;
                            }
                        }
                         
                    });
                }
            };

            self.validateCaptorForm();
        }

        self.validateCaptorForm = function() {
            self.validationError = '';
            if (self.requiredVal && !self.value) {
                self.validationError = "This is a required field ";
                return false;
            }
        }
        self.getCharCount = function(str){
            var charCount = 0;
            var whiteSpaceRegExp = /\s/g;

            if(str !== null || str !== undefined){
                charCount = (str).replace(whiteSpaceRegExp,'').length;
            }

            return charCount;
        };

        self.getCountWithoutSpaces = function(str, maxLen){
            var spCount = 0;
            spCount = str.substring(0,maxLen).split(' ').length-1;
            return spCount;

        }
    };