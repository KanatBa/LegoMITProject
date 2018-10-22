var VideoGamesPage = function(){
    this.gamesCategory = $$('.list-grid__list>li');
    this.moreButtonText = element(by.buttonText("More"));
    this.videoGamesSubtitles=$$("h5[class='content-item__sub-title']");
    this.videoGamesImages=$$('.content-item__img.format__obj.lego-loaded');
};
module.exports = new VideoGamesPage();