class SaveButtonController {
    constructor(toastr) {
        this.toastr = toastr;
    }
    $onInit() {
        this.parentForm = this.parent;
        this.formValid = this.parent.$valid;
    }
    save(myForm) {
        console.log(myForm);
        if (!myForm.$valid) {
            myForm.$setSubmitted();
            return;
        } else {
            this.toastr.success('Form Submitted Successfully!!', {
                'timeOut': 3000,
                'progressBar': false,
                'position-class': 'toast-top-right',
                'target': 'body'
            });
        }
    }
}

export { SaveButtonController };