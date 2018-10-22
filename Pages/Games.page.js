var GamesPage = function(){
    this.gamesLink=$('.l-nav__item.js-track--games>a');
    this.navigationBarLinks=$$(".nav__list>li");
    this.navigationBarLinksLocator= index =>{
        return ".nav__list>li:nth-of-type("+index+")";
    }
 };
 module.exports = new GamesPage();