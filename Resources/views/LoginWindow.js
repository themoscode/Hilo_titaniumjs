App.UI.LoginWindow = function () {

    // load defaults
    var that = this;
    this.defaults = App.Defaults.LoginWindow;
    this.windowProperties = this.defaults.Window;
    this.viewProperties = this.defaults.WrapperView;
    this.titleLabelProperties = this.defaults.TitleLabel;
    this.descriptionLabelProperties = this.defaults.DescriptionLabel;
    this.usernameTextFieldProperties = this.defaults.UsernameTextField;
    this.rightArrowImageViewProperties = this.defaults.RightArrowImageView;
    this.lineImageViewProperties = this.defaults.LineImageView;
    this.passwordTextFieldProperties = this.defaults.PasswordTextField;
    this.lineImageView2Properties = this.defaults.LineImageView2;
    this.submitButtonProperties = this.defaults.SubmitButton;

    //create elements
    this.window = Ti.UI.createWindow(this.windowProperties);
    this.view = Ti.UI.createView(this.viewProperties);
    this.titleLabel = Ti.UI.createLabel(this.titleLabelProperties);
    this.descriptionLabel = Ti.UI.createLabel(this.descriptionLabelProperties);
    this.usernameTextField = Ti.UI.createTextField(this.usernameTextFieldProperties);
    this.rightArrowImageView = Ti.UI.createImageView(this.rightArrowImageViewProperties);
    this.lineImageView = Ti.UI.createImageView(this.lineImageViewProperties);
    this.passwordTextField = Ti.UI.createTextField(this.passwordTextFieldProperties);
    this.lineImageView2 = Ti.UI.createImageView(this.lineImageView2Properties);
    this.submitButton = Ti.UI.createButton(this.submitButtonProperties);

    //assemble elements
    //this.view.add(this.titleLabel);
    this.view.add(this.descriptionLabel);
    this.view.add(this.usernameTextField);
    this.view.add(this.rightArrowImageView);
    this.view.add(this.lineImageView);
    this.view.add(this.passwordTextField);
    this.view.add(this.lineImageView2);
    this.view.add(this.submitButton);
    this.window.add(this.view);

    //events
    this.submitButton.addEventListener('click', _.bind(App.Controllers.LoginWindowController.submitButtonClick, that));

};

App.UI.LoginWindow.prototype = {

    clear: function () {
        this.usernameTextField.setValue('');
        this.passwordTextField.setValue('');
    },

    getFormValues: function () {
        var email = this.usernameTextField.getValue();
        var password = this.passwordTextField.getValue();

        return {
            email: email,
            password: password
        };
    }
};

