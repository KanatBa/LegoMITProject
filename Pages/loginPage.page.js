var LoginPage = function(){

    
    this.userNameBox = element(by.id('username'));
    this.userPasswordBox =  element(by.id('password'));
    this.userRememberBox =  element(by.id('rememberme'));
    this.userLoginBox = element(by.id('loginBtn'));
    this.loginTroubleBox = element(by.css('.login-trouble>a'));
    this.forgotUsername = element(by.id('forgotusername'));
    this.forgotPassword = element(by.id('forgotpassword'));
    this.submitButton = element(by.css('.buttons'));
    this.newUserAccount = element(by.linkText("Don't have a LEGO Account?"));
    this.homePageBox = element(by.css('.l-gh__logo.l-logo'));

    this.logoutButton = element(by.xpath('//*[@id="l-gh"]/div/div/div[1]/div[2]/div/button/div[1]/div[2]'));
}

module.exports = new LoginPage();