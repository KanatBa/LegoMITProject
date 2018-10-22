var Base = require('../Utilities/Base.js');
var LegoLifePage = require('../Pages/LegoLife.page.js');
var EC = protractor.ExpectedConditions;

describe('US_1: LEGO®Life App Navigation', () => {
   

    beforeEach(()=>{
        //Base.navigateToHome();
        //browser.sleep(1000);
        //LegoLifePage.mainLegoLifeButton.click();
        browser.get('https://www.lego.com/en-us/life');
        browser.sleep(1000);
    })
    

    it('AC_1.1:should display LEGO® LIFE link on main page', () => {
        let locator = by.xpath("//area[@coords='264,273,389,309']");
        element.all(locator).count().then((ct)=>{  
            if(ct!=0){
                element(locator).click();
            }
        });
        expect(LegoLifePage.mainLegoLifeLink.isDisplayed()).toBe(true);
    });
    it('AC_1.2:should navigate to LEGO® LIFE page from main page', () => {
        
        expect(browser.getCurrentUrl()).toEqual(LegoLifePage.legoLifeWebPage);
    });
    it('AC_2.1:should display LEGO® LIFE App link on LEGO® LIFE page', () => {
        
        expect(LegoLifePage.legoLifeButton.isDisplayed()).toBe(true);
    });
    it('AC_2.2:should display active color of LEGO® LIFE App link LEGO® LIFE page', () => {
       
        expect(LegoLifePage.legoLifeButton.getCssValue('background-color')).
        toBe('rgba(5, 158, 214, 1)')
    });
    it('AC_2.3:should display "Download on the Apple App Store" button on LEGO® LIFE page', () => {
        
        expect(LegoLifePage.appleButton.isDisplayed()).toBe(true);
    });
    it('AC_2.4:should click "Download on the Apple App Store" app link and navigate to Apple App Store', () => {
        LegoLifePage.appleButton.click();
        browser.wait(EC.visibilityOf(LegoLifePage.redirectButton),5000).
        then(()=>{
            LegoLifePage.redirectButton.click().then(()=>{
                browser.waitForAngularEnabled(false);
                browser.wait(EC.visibilityOf($('#ember113')),15000).
                then(()=>{
                expect(browser.getCurrentUrl()).
                toContain('https://itunes.apple.com/gb/app/lego-life');
                })
            })
        })
  
    });
    it('AC_2.5:should display "GET IT ON Google Play" on LEGO® LIFE page', () => {
        
        expect(LegoLifePage.googleButton.isDisplayed()).toBe(true);
    }); 
    it('AC_2.6:should click "GET IT ON Google Play" app link and navigate to Google Play Store',() => {
        LegoLifePage.googleButton.click();
        browser.wait(EC.visibilityOf(LegoLifePage.redirectButton),5000).
        then(()=>{
            LegoLifePage.redirectButton.click().
            then(()=>{
                browser.waitForAngularEnabled(false);
                browser.wait(EC.visibilityOf(LegoLifePage.googlePlayLogo),15000).
                then(()=>{
                expect(browser.getCurrentUrl()).toEqual(LegoLifePage.googlePlayWebSite); 
                })
            })
        })
  
    });
    it('AC_2.7:should display "Available at amazon" on LEGO® LIFE page', () => {
        
        expect(LegoLifePage.amazonButton.isDisplayed()).toBe(true);
    }); 
    it('AC_2.8:should click "Available at amazon" app link and navigate to Amazon App Store',() => {
        LegoLifePage.amazonButton.click();
        browser.wait(EC.visibilityOf(LegoLifePage.redirectButton),5000).
        then(()=>{
            LegoLifePage.redirectButton.click().
            then(()=>{
                browser.waitForAngularEnabled(false);
                browser.wait(EC.visibilityOf(LegoLifePage.amazonTryPrime),15000).
                then(()=>{
                expect(browser.getTitle()).toEqual(LegoLifePage.amazonWebTitle) 
                })
            })
        })
  
    });


});