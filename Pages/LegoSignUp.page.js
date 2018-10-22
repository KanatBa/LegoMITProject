require('../Utilities/CustomLocators.js')

var LegoSignUpPage = function(){
    this.legoMagazineButton = $$('.nav.navbar-nav li').get(2)   
    this.buttonColorBlue = 'rgba(5, 158, 214, 1)';
    this.getMagazineButton = element(by.linkText('GET THE MAGAZINE'));
    this.magazineWebPage = 'https://www.lego.com/en-us/life/magazine';
    this.subscriptionPage = 'https://www.lego.com/en-us/life/subscription';
    this.signUpButton = element(by.ngClick('signUp()'));
   
    this.slideElement1_1 = $$('#ul-slider-minibuild li').get(0);
  
    
    this.slideElement2_1 = $$('#ul-slider-minifig li').get(0);

    this.slideElement3_1 = $$('#ul-slider-color li').get(0);
   
    this.confirmButton = $('button.btn-confirm-secondary');
    //this.thisIsMeButton = $('button.btn-confirm-primary');
    this.thisIsMeButton = element(by.xpath("//*[@class='btnActions']/button"))
    
    this.navigateToSignUp = function(){
        this.legoMagazineButton.click()
            this.getMagazineButton.click();
    
    }


}
module.exports = new LegoSignUpPage();