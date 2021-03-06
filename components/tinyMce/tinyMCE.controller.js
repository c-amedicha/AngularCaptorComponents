class TinyMCEController {
    constructor() {

    }
    $onInit() {
        var self = this;
        self.rem_Count = 0,
            self.char_Count = 0;
        self.minimumLength = 5;

        if (self.isRequired == "true") {
            self.requiredVal = true;
        } else {
            self.requiredVal = false;
        }

        self.tinymceOptions = {
            theme: "modern",
            skin: 'captor',
            plugins: ((self.disabledBlock == "true") ? 'autoresize link autolink' : 'wordcount link powerpaste autoresize autolink'),
            default_link_target: "_blank",
            extended_valid_elements: "a[href|target=_blank]",
            oninit: "setPlainText",
            paste_as_text: true,
            spellchecker_language: 'en',
            autoresize_min_height: 150,
            autoresize_max_height: 150,
            powerpaste_word_import: 'clean',
            powerpaste_html_import: 'merge',
            wordcount_cleanregex: /[0-9.(),;:!?%#$?\x27\x22_+=\\/\-]*/g,
            browser_spellcheck: true,
            menubar: false,
            inline: false,
            forced_root_block: false,
            content_css: [
               '../css/apps-googlefont.min.css',
            '../css/tinymce.min.css'
            ],
            readonly: ((self.disabledBlock == "true") ? true : false),
            toolbar: ((self.disabledBlock == "true") ? 'false' : "bold italic underline link"),
            link_assume_external_targets: true,
            style_formats: [
                {
                    title: 'Bold text',
                    inline: 'b'
                },
                {
                    title: 'Example 1',
                    inline: 'span',
                    classes: 'example1'
                },
                {
                    title: 'Example 2',
                    inline: 'span',
                    classes: 'example2'
                },
                {
                    title: 'Table styles'
                },
                {
                    title: 'Table row 1',
                    selector: 'tr',
                    classes: 'tablerow1'
                }
                ],
            link_class_list: [{
                title: 'Hyperlink',
                value: 'tinymce-hyperlink'
            }],
            init_instance_callback: function (editor) {
                var textContentTrigger = function (e) {
                    var key = e.keyCode;
                    self.char_Count = self.getCharCount(editor.getBody().textContent);
                    self.rem_Count = parseInt(self.maxcharCount) - self.char_Count;

                    if (self.char_Count == parseInt(self.maxcharCount)) {
                        if ((key != 8) && (key != 46) && (key != 37) && (key != 38) && (key != 39) && (key != 40) && (key != 17)) { //for backspace, delete, ctrlKey and arrow keys
                            var ctrlDown = false;
                            if (key != 17) {
                                ctrlDown = true;
                            }
                            if (ctrlDown && ((key == 67) || (key == 88))) {
                                //Allow Ctrl+c (Copy) and Ctrl+x (Cut) Shortcuts
                            } else {
                                e.stopPropagation();
                                e.preventDefault();
                            }
                        }

                    } else if (self.char_Count > parseInt(self.maxcharCount)) {
                        var spCount = self.getCountWithoutSpaces(editor.getBody().textContent, parseInt(self.maxcharCount));
                        self.value = (editor.getBody().textContent);
                        console.log(parseInt(self.maxcharCount) + spCount);
                        self.value = (self.value).slice(0, parseInt(self.maxcharCount) + spCount);
                        editor.setContent(self.value);
                    }
                    self.validateCaptorForm(self.value);
                }

                editor.on('KeyUp KeyDown KeyPress LoadContent Change NodeChange Paste', function (e) {
                    textContentTrigger(e);
                });
            }
        };

        self.validateCaptorForm(self.value);
    }

    validateCaptorForm(editorValue) {
        this.validationError = '';
        var whiteSpaceRegExp = /\s/g,
            spChar = /&nbsp;/g;

        editorValue = (editorValue).replace(spChar, '');
        editorValue = editorValue.replace(whiteSpaceRegExp, '');

        if (this.requiredVal && editorValue.length == 0) {
            this.validationError = "This is a required field ";
            this.parent.$setValidity('tinyMce', false);
            return false;
        }
        if (editorValue.length > 0 && editorValue.length < this.minimumLength) {
            this.validationError = "Minimum " + this.minimumLength + " characters are required";
            this.parent.$setValidity('tinyMce', false);
            return false;
        }
        this.validationError = '';
        this.parent.$setValidity('tinyMce', true);
        return true;
    }

    getCharCount(str) {
        var charCount = 0;
        var whiteSpaceRegExp = /\s/g;

        if (str !== null || str !== undefined) {
            charCount = (str).replace(whiteSpaceRegExp, '').length;
        }

        return charCount;
    };

    getCountWithoutSpaces(str, maxLen) {
        var spCount = 0;
        var nonWhiteSpaceRegExp = /\S/g;
        if (str !== null || str !== undefined) {
            spCount = (str).replace(nonWhiteSpaceRegExp, '').length;
        }
        return spCount;
    }

    onChange(e) {
        this.validateCaptorForm(this.value);
    };
}

export { TinyMCEController };