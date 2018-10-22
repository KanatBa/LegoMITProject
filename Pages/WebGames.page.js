var WebGamePage = function(){

    
    this.moreButtonText = element(by.buttonText('More'));
    this.moreButtonTextArr= element.all(by.buttonText('More'));
    this.pagePath = $$('.breadcrumb__list>li');
    this.webGamesTitle = $$('.list-grid__list>li');
    this.webGamesSubtitle=$$("h5[class='content-item__sub-title']");
    this.webGamesImages=$$('.content-item__img.format__obj.lego-loaded');
};
module.exports = new WebGamePage();