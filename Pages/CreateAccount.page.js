
var CreateAccountPage=function(){
    this.okButton=element(by.css('.l-accept__btn.l-btn.js-accept__btn'));
    this.hoverOver=  $('.l-gh__login');                            
    this.createAccountLink=element(by.linkText('Create Account'));
    this.createAccountForm=$('.form-wrapper');
    this.createAccountLabels=$$('.form-wrapper label');
    this.emailField=$('#email');
    this.passwordField=$('#password');
    this.confirmPasswordField=$('#password2');
    this.birthMonth=element(by.css('#month')).element(by.cssContainingText('option','April'));
    this.birthDay=element(by.css('#day')).element(by.cssContainingText('option','12'));
    this.birthYear=element(by.css('#year')).element(by.cssContainingText('option','1991'));
    this.country=element(by.css('#country')).element(by.cssContainingText('option','-----'));
    this.checkbox=element(by.css("input[type='checkbox']"));
    this.linkToLogin=element(by.linkText('Already have a LEGO Account?'));
    this.helpLink=element(by.linkText('Help'));
    this.image=$('.app-footer>img');
    this.passwordError=$('#passwordError');   
    this.password2Error=$('#password2');
    this.countryError=$('.form-element.country .error');
    this.helpTitle=$('.header.message-heading');
    this.closeHelp=$('.modal-close');
    this.nextButton=element(by.buttonText('Next'));
}
module.exports= new CreateAccountPage();