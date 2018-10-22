var LegoLifePage = function(){
    this.mainLegoLifeButton = $$('.l-gh__nav li').get(4);
    this.mainLegoLifeLink = element.all(by.linkText('LEGO® LIFE')).first();
    this.legoLifeWebPage = 'https://www.lego.com/en-us/life';
    this.legoLifeButton = $$('.nav.navbar-nav li').get(0)
    this.appleButton = $$('.section1>div li').get(6);
    this.googleButton = $$('.section1>div li').get(7);
    this.amazonButton = $$('.section1>div li').get(8);
    this.amazonTryPrime = element.all(by.linkText('Try Prime')).first();
    this.amazonWebTitle = 'Amazon.com: LEGO® Life – Create, share & discover: Appstore for Android'
    this.googlePlayWebSite = 'https://play.google.com/store/apps/details?id=com.lego.common.legolife';
    this.googlePlayLogo = element(by.css("[title='Google Play Logo']"));
    this.redirectButton = $('.js--redirect-modal');
    
    
}
module.exports = new LegoLifePage();