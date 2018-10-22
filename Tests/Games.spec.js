var H_Page = require('../Pages/Amy.page.js');
var GamesPage = require('../Pages/Games.page.js');
var WebGamesPage = require('../Pages/Webgames.page.js');
var MobileApps = require('../Pages/MobileApps.page.js');
var VideoGames = require('../Pages/VideoGames.page.js');
var Utilities = require('../Utilities/Utils.js');
var Data = require('../TestData/dataFile.js');
var gamesUrl = "https://www.lego.com/en-us/games";

describe('Logo.com Games Page Automation', () => {
    beforeAll(()=>{

    
    
    browser.get(gamesUrl);
        let locator = by.xpath("//area[@coords='264,273,389,309']");
    element.all(locator).count().then(ct=>{
        if(ct!=0){
            element(locator).click();
        }
    });  
    element(by.xpath('//*[@id="l-sticky-gf"]/div/button')).isDisplayed().then(ct=>{
        if(ct){
            element(by.xpath('//*[@id="l-sticky-gf"]/div/button')).click();
        }
    }); 
})
    it('1.  Should Games link on the navigation bar be displayed and takes user to Games page', function(){
        browser.get("https://www.lego.com/en-us");

        //AC_1.1. “Games” link should be displayed on main page navigation bar.

        H_Page.gamesLink.isDisplayed().then(IsGamesLinkIsDisplayed=>{
            expect(IsGamesLinkIsDisplayed).toBe(true);
        }); 
        
        // //AC_1.2. “Games” link should navigate to games page.
        
        H_Page.gamesLink.click();
        let expectedUrl = "https://www.lego.com/en-us/games";
        expect(Utilities.currentUrl()).toEqual(expectedUrl);
        let expectedTitle = "Games - Web and video games - LEGO.com US";
        expect(Utilities.pageTitle()).toBe(expectedTitle);
    });

    //All links should be displayed on navigation bar
    it('2.  Should all the links are displayed on navigation bar', () => {
       browser.get(gamesUrl);
        GamesPage.navigationBarLinks.getText().then(arr=>{

                expect(arr).toEqual(Data.navigationBarLinks());

        });
    });
    //All links should navigate to games page
    it('3.  Should all the links on the navigation bar navigate to the correct pages', () => {
        browser.get(gamesUrl);
        browser.sleep(3000);
        

        // GamesPage.navigationBarLinks.then(elems=>{
        //     for(let i=0;i<elems.length;i++){
        //         $(GamesPage.navigationBarLinksLocator(i+1)).click();
        //         expect(Utilities.currentUrl()).toEqual(Data.categoryUrls()[i]);
        //         expect(Utilities.pageTitle()).toBe(Data.categoryTitles()[i]);
        //         browser.navigate().back();
        //         browser.sleep(500);
        //     }   
        // });
          
    });
    //------------------------Web games--------------------------
    //Validate games on Web Games page
    let webGamesUrl = "https://www.lego.com/en-us/games/webgames";

    //AC_1.1. Page path displayed on page must be “Home > Games > Web Games”.
    it('4.  Should Web Games page path displayed on the page', () => {

    browser.get(webGamesUrl);
    browser.sleep(3000);
    let arr = ["Home","Games","Web Games"];
        Utilities.pagePath.each((elm,index)=>{
            elm.getText().then(text=>{
                expect(arr[index]).toBe(text);
            });
        });
    });
    //AC_1.2. All displayed games should have a title
    it('5.  Should all displayed games have titles.',
    () => {
        browser.get(webGamesUrl);
        browser.sleep(3000);
        let expectedWebGames=Data.webGamesTitles();
        Utilities.gamesCategory.each((elm,index)=>{
            elm.getText().then(txt=>{
            expect(txt.substring(0,txt.indexOf('\n'))).toEqual(expectedWebGames[index]);
           });
        });   
    });

    //AC_1.3. All displayed games should have a subtitle.
    it('6.  Should all Web Games diplayed subtitles ', () => {
        let webGamesSubtitles= Data.webGamesSubtitles();
        browser.get(webGamesUrl);
        WebGamesPage.webGamesSubtitle.getText().then(title =>{
            expect(webGamesSubtitles).toEqual(title);
        });
    });
    //AC_1.4. All displayed games should have  images.
    it('7.  Should all Web Games have images', () => {
        browser.get(webGamesUrl);
        browser.sleep(3000);
        WebGamesPage.webGamesImages.each(image=>{
            expect(image.isDisplayed()).toBe(true);
        });   
    });

    //-------------------Mobile Apps---------------------\\
    let mobileAppURL="https://www.lego.com/en-us/games/apps";
    //AC_2.1. Page path displayed on page must be “Home > Games > Mobile Apps”
    it('8.  Should Mobile Apps page path displayed on the page', () => {
        browser.get(mobileAppURL);
        browser.sleep(3000);
        let arr = ["Home","Games","Mobile Apps"];
        Utilities.pagePath.each((elm,index)=>{
            elm.getText().then(text=>{
                expect(arr[index]).toBe(text);
            });
        });
    });

    //AC_2.2. All displayed mobile apps should have title
    it('9.  Should all displayed Mobile Apps have titles.',
    () => {
        browser.get(mobileAppURL);
        browser.sleep(3000);
        let expectedMobileApps=Data.mobileAppsTitles();
        Utilities.gamesCategory.each((elm,index)=>{
            elm.getText().then(txt=>{
            expect(txt.substring(0,txt.indexOf('\n'))).toEqual(expectedMobileApps[index]);
           });
        });   
    });

    //AC_2.3. All displayed mobile apps should have a subtitle.
    it('10. Should all Mobile Apps diplayed subtitles', () => {
        let mobileAppsSubtitles = Data.mobileAppsSubtitles();
        browser.get(mobileAppURL);
        MobileApps.mobileAppsSubtitles.getText().then(subTitle =>{
            //console.log(subTitle);
            expect(subTitle).toEqual(mobileAppsSubtitles);
        });
    });

    //AC_2.4. All displayed mobile apps should have an image.
    it('11. Should all Web Games have images', () => {
        browser.get(mobileAppURL);
        browser.sleep(3000);
        MobileApps.mobileAppsImages.each(image=>{
            expect(image.isDisplayed()).toBe(true);
        });   
    });
    
    //----------------------Video Games----------------------\\

    let videoGamesURL="https://www.lego.com/en-us/games/videogames";

    //AC_3.1. If “More” button displayed, it must load more game when it clicked.
    it('12. Should check more button displayed', () => {
        browser.get(videoGamesURL);   
        browser.sleep(2000);
        // VideoGames.moreButtonText.isDisplayed().then(bool=>{
        //     if(bool){
        //         VideoGames.gamesCategory.count().then(numberBeforeClickingMoreButton=>{
        //             VideoGames.moreButtonText.click();
        //             browser.sleep(500);
        //             VideoGames.gamesCategory.count().then(numberAfterClickingMoreButton=>{
        //                 expect(numberAfterClickingMoreButton).toBeGreaterThan(numberBeforeClickingMoreButton);
        //             });
        //         });
        //     }
        // });
    });

    //AC_3.2. Page path displayed on page must be “Home > Games > Video Games”
    it('13. Should Video Games page path displayed on the page', () => {
        browser.get(videoGamesURL);
        browser.sleep(3000);
        let arr = ["Home","Games","Video Games"];
        Utilities.pagePath.each((elm,index)=>{
            elm.getText().then(text=>{
                expect(arr[index]).toBe(text);
            });
        });
    });

    //AC_3.3. All displayed video games should have title.
    it('14. Should all displayed Mobile Apps have titles.',
    () => {
        browser.get(videoGamesURL);
        browser.sleep(3000);
        let expectedVideoGames=Data.videoGamesTitles();
        Utilities.gamesCategory.each((elm,index)=>{
            elm.getText().then(txt=>{
            expect(txt.substring(0,txt.indexOf('\n'))).toEqual(expectedVideoGames[index]);
           });
        });   
    });

    //AC_3.4. All displayed video games should have a subtitle
    it('15. Should all Mobile Apps diplayed subtitles', () => {
        let videoGamesSubtitles = Data.videoGamesSubtitles();
        browser.get(videoGamesURL);
        VideoGames.videoGamesSubtitles.getText().then(subTitle =>{
            // console.log(subTitle);
            expect(subTitle).toEqual(videoGamesSubtitles);
        });
    });
   
    //AC_3.5. All displayed video games should have an image.
    it('16. Should all Web Games have images', () => {
        browser.get(videoGamesURL);
        browser.sleep(2000);
        VideoGames.videoGamesImages.each(image=>{
            expect(image.isDisplayed()).toBe(true);
        });  
    });
});
