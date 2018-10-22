var H_Page = function(){

    this.gamesLink=element(by.xpath("//a[@class='l-nav__link' and contains(@href,'games')]"));
    this.legoNeedsYourHelpAdd = element.all(by.xpath("//map[@name='IPEMap']/area[2]"));

};
module.exports= new H_Page();