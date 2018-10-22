var Base = function () {
    
    this.homePage = 'https://www.lego.com/en-us/videos';
    this.clickVideos = function(){
        $('.l-nav__item.js-track--videos >a').click();
    }

    this.allowCookies = function(){
        $('.js-accept__btn').click();
    }
    this.popUp = element(by.css('.l-accept__btn.l-btn.js-accept__btn'));
    this.secondUrl="https://www.lego.com/en-us/service/contactus";
    this.supportUrl='https://www.lego.com/en-us/service';
}

module.exports = new Base();