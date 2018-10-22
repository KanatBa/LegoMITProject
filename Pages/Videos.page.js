var VideosPage = function(){
    this.headerLinks = $$('.l-nav>li');
    this.searchButton = $$('.l-search__toggle').first();
    this.accountMenu = $$('.l-profile__txt.l-profile__txt--static').last();

    this.footerLinks = $$('.l-gf__sitemap>li');
    this.privacyLinks = $$('.l-list--inline>li');
    this.language = $('.l-select__selected');
    this.cookies = $$('.l-policy-info>li');

    this.differentLanguages = $$('.l-list__item.l-market-list__item');
    this.korean = $('.l-flag--kr');

    this.themes = $$('.header__title-link').first();
    this.seeMore = $$('.btn--primary');
    this.themesVideos = $$('.lego-loaded');
    this.scoobyDoo = this.themesVideos.get(17);
    this.Velma = element.all(by.xpath("//*[@alt='LEGO Scooby-Doo Velma’s Discovery']")).first();
    this.videoTitle = $('.header__title');
    this.playButton = element(by.xpath("//*[@title='Play Video']"));
}

module.exports = new VideosPage();
