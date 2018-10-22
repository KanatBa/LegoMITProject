var Utilities = function(){
     
    this.currentUrl = ()=>{
         return browser.getCurrentUrl();
     }

     this.pageTitle = ()=>{
        return browser.getTitle();
    }
    
    this.pagePath = $$('.breadcrumb__list>li');
    this.gamesCategory = $$('.list-grid__list>li');
    this.categoryGameListTitles = $$("h3[class='content-item__title']");
    this.categoryGameListSubtitles = $$("h5[class='content-item__sub-title']");
    this.gameDetailTitle=$("h1[class='header__title-inner']");
    this.gameDetailSubtitle = $("p[class='header__sub-title']");
};
module.exports = new Utilities();