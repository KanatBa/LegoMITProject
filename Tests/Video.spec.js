var Base = require('../Utilities/Base.js');
var VideosPage = require('../Pages/Videos.page.js');

describe('Videos Page', () => {
    describe('Videos Page', () => {
        beforeAll(function(){
            browser.get(Base.homePage);
            browser.sleep(3000);
            //Base.clickVideos();
            //Base.allowCookies();
        })

        it('Should see lego icon on Header', () => {
            expect($('.l-gh__logo.l-logo').isDisplayed()).toBe(true);
        });

        it('Should see “Shop”, “Products”, “Support”, “Games”, “Lego Life” an “Videos” on Header', () => {
            for(var i=0; i<=5; i++){
                expect(VideosPage.headerLinks.get(i).isDisplayed()).toBe(true);
            }
        });

        it('Should see “For Kids”, search box and account dropdown menu on Header', () => {
            expect(VideosPage.headerLinks.get(6).isDisplayed()).toBe(true);
            expect(VideosPage.searchButton.isDisplayed()).toBe(true);
            expect(VideosPage.accountMenu.isDisplayed()).toBe(true);                                                              
        });

        it('Should see “Customer Service”, “About Us”, “Parents”, “Educators”, “ Attractions” and below links of them on footer', () => {
            for(var i=0;i<5;i++){
                expect(VideosPage.footerLinks.get(i).isDisplayed()).toBe(true);
            }
        });

        it('Should see “Privacy Policy”, “Cookies”, “ Terms of Use” links and below text on footer', () => {
            for(var i=0; i<3;i++){
                expect(VideosPage.privacyLinks.get(i).isDisplayed()).toBe(true);
            }
        });

        it('Should see Language selection button on footer', () => {
            expect(VideosPage.language.isDisplayed()).toBe(true);
        });

        it('Should see “Privacy Policy” and “Cookies”, buttons on right bottom of the page', () => {
            expect(VideosPage.cookies.first().isDisplayed()).toBe(true);
            expect(VideosPage.cookies.last().isDisplayed()).toBe(true);
        });

        it('Should change the language', () => {
            VideosPage.language.click();
        });

        it('Should be 26 different languages', () => {
            for(var i=0;i<VideosPage.differentLanguages.length; i++){
                expect(VideosPage.differentLanguages.get(i).count()).toEqual(26);
            }  
        });

        it('Should see there is Korean', () => {
            expect(VideosPage.korean.isDisplayed()).toBe(true);
        });

        it('Should choose the Korean', () => {
            VideosPage.korean.click();
        });

        it('Should see that language changed as Korean', () => {
            expect(browser.getCurrentUrl()).toEqual('https://www.lego.com/ko-kr/videos?ignorereferer=true');
        });

        it('Should NOT see there is “Georgian”', () => {
            //Base.allowCookies();
            VideosPage.language.click();
            VideosPage.differentLanguages.getAttribute('hreflang').then((att)=>{
                var count =0;
                for(let i of att){
                    if(i != "ge-GE"){
                        count++;
                    }
                }

                expect(count).toEqual(att.length);
            })
        });

        it('Should see “Themes” section', () => {
            browser.get(Base.homePage);
            Base.clickVideos();
            expect(VideosPage.themes.isDisplayed()).toBe(true);
        });

        it('Should see “See More” button on the “Themes” section and click', () => {
            expect(VideosPage.seeMore.first().isDisplayed()).toBe(true);
            VideosPage.seeMore.first().click();
        });

        it('Should see “LEGO Scooby-Doo” option and click', () => {
            expect(VideosPage.scoobyDoo.isDisplayed()).toBe(true);
            VideosPage.scoobyDoo.click();
        });

        it('Should see “LEGO Scooby-Doo Velma’s Discovery”video and click', () => {
            expect(VideosPage.Velma.isDisplayed()).toBe(true);
            VideosPage.Velma.click();
        });

        it('Should click play button of the video and watch the video', () => {
            expect(VideosPage.videoTitle.getText()).toEqual('LEGO Scooby-Doo Velma’s Discovery');
            expect(VideosPage.playButton.isDisplayed()).toBe(true);
            VideosPage.playButton.click();
            browser.sleep(5000);
        });
    });    
});
