require('../Utilities/customlocators.js');
var HomePage=function(){
    this.SiteMaplist=element.all(by.css('.l-gf__inner > ul > li'));
    this.listSiteMap=['Customer Service','Building Instructions','Replacement Parts','Contact Us','Product Recalls'];
    this.mainDisplayMenus=element.all(by.css('.l-nav li'));
    this.listMainDislayMenus=['SHOP','PRODUCTS','SUPPORT','GAMES','LEGO® LIFE','VIDEOS','FOR KIDS'];
    this.cookieButton=element(by.css('.l-accept__btn.l-btn.js-accept__btn'));
    this.usCounrySelected=element(by.css('.l-select__selected.l-flag.l-flag--us'));
    this.selectLanguage=function(country){
        element(by.css('.l-select__selected.l-flag.l-flag--'+country)).click();
    };
    this.selectWebLanguage=function(country){
        element(by.partialLinkText(country)).click();  
    }
    this.shopPagePopUp=element(by.css('.l-xlink__header'));
    this.shopPage=element(by.linkText('SHOP'));
    this.shopPageWarn=element(by.css('#dialog-description>p'));
    this.shopPagePopUpClose=element(by.buttonText('Close'));
    this.slidePictures=element.all(by.css('.stage.ng-scope>img'));
    this.videoFrame=element(by.css('.video__inner'));
    this.videoRunButton=element(by.css('button.vjs-big-play-button'));
    this.videoPauseButton=element(by.css("button[title='Pause']"));
    this.listCountries=element.all(by.className('l-list__item  l-market-list__item'));
    this.arrowright=element(by.css('.mainstage__btn-icon.icon.icon-angle-right'));
    this.picturesSlide=element.all(by.css('.stage.ng-scope>img'));

    
};
module.exports=new HomePage();
