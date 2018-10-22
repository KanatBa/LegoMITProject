require('../Utilities/CustomLocators.js');
var Base = require('../Utilities/Base.js');
var LegoSignUpPage = require('../Pages/LegoSignUp.page.js');
var LegoLifePage = require('../Pages/LegoLife.page.js');
var EC = protractor.ExpectedConditions;
describe('US_2: Email Sign Up', () => {

    beforeEach(()=>{
        //Base.navigateToHome();
        //LegoLifePage.mainLegoLifeButton.click();
        browser.get('https://www.lego.com/en-us/life');
        browser.sleep(1000);
    })


    it('AC_1.1: should display "Magazine" link on LegoLife page', () => {
        let locator = by.xpath("//area[@coords='264,273,389,309']");
        element.all(locator).count().then((ct)=>{  
            if(ct!=0){
                element(locator).click();
            }
        });
       

        expect(LegoSignUpPage.legoMagazineButton.isDisplayed()).toBe(true);
    });
    it('AC_1.2: should navigate to registration when "Magazine" link is clicked', () => {
        LegoSignUpPage.legoMagazineButton.click();
        browser.sleep(1000);
        expect(LegoSignUpPage.legoMagazineButton.getCssValue('background-color')).
        toEqual(LegoSignUpPage.buttonColorBlue);
        browser.executeScript("arguments[0].scrollIntoView();",
        LegoSignUpPage.getMagazineButton).then(()=>{
        expect(LegoSignUpPage.getMagazineButton.isDisplayed()).toBe(true);
        expect(browser.getCurrentUrl()).toEqual(LegoSignUpPage.magazineWebPage)
        })
        LegoSignUpPage.getMagazineButton.click();
        browser.sleep(1000);
        expect(browser.getCurrentUrl()).toEqual(LegoSignUpPage.subscriptionPage);
        LegoSignUpPage.navigateToSignUp();
        browser.executeScript("arguments[0].scrollIntoView();",
        LegoSignUpPage.signUpButton).then(()=>{
        expect(LegoSignUpPage.signUpButton.isDisplayed()).toBe(true);
        })
        LegoSignUpPage.signUpButton.click().then(()=>{
            browser.waitForAngularEnabled(false);
            expect(browser.getCurrentUrl()).
            toContain('registerlife')
        })
    });

    // it('AC_1.3:should navigate and verify to "Parent Email Address Page"', () => {
    //     LegoSignUpPage.legoMagazineButton.click()
    //     browser.sleep(2000);
    //     LegoSignUpPage.getMagazineButton.click();
    //     browser.sleep(1000);
    //     browser.executeScript("arguments[0].scrollIntoView();",LegoSignUpPage.signUpButton)
    //     .then(()=>{
    //     browser.waitForAngularEnabled(false);
    //     LegoSignUpPage.signUpButton.click().then(()=>{
    //         browser.wait(EC.visibilityOf(LegoSignUpPage.slideElement1_1),10000).then(()=>{
    //             browser.actions().mouseMove(LegoSignUpPage.slideElement1_1).perform();
    //             LegoSignUpPage.slideElement1_1.click();
    //             browser.sleep(1000);
    //             browser.wait(EC.visibilityOf(LegoSignUpPage.slideElement2_1),10000).then(()=>{
    //                 browser.actions().mouseMove(LegoSignUpPage.slideElement2_1).perform();
    //                 LegoSignUpPage.slideElement2_1.click()
    //                 browser.sleep(1000);
    //             browser.wait(EC.visibilityOf(LegoSignUpPage.slideElement3_1),10000).then(()=>{
    //                 browser.actions().mouseMove(LegoSignUpPage.slideElement3_1).perform();
    //                 LegoSignUpPage.slideElement3_1.click()
    //                 browser.sleep(1000);
    //             browser.wait(EC.visibilityOf(LegoSignUpPage.thisIsMeButton),10000)
    //             browser.actions().mouseMove(LegoSignUpPage.thisIsMeButton).perform();
    //             LegoSignUpPage.thisIsMeButton.click();
    //             browser.sleep(1000);
                
    //             browser.wait(EC.elementToBeClickable(element(by.buttonText('Yes, I like it'))),10000).
    //             then(()=>{LegoSignUpPage.confirmButton.click();})
    //             browser.wait(EC.visibilityOf($('#GetYourParents')),10000).then(()=>{
                
    //             $('button.btn-confirm').click()
    //             browser.sleep(1000);
    //             expect(browser.getCurrentUrl()).toContain('upgrade/email')
            
    //             $('#email').sendKeys(protractor.Key.ENTER);
    //             browser.sleep(1000);
            
    //             $('.btn.btn-confirm').click();
    //             browser.sleep(1000);
    //             expect($('#emailError').isDisplayed()).toBe(true);
    //             $('#email').sendKeys('abc123');
    //             $('button.btn-confirm').click()
    //             browser.sleep(1000);
    //             expect($('#emailError').isDisplayed()).toBe(true);
    //             $('#email').clear();
    //             browser.sleep(1000);
    //             $('#email').sendKeys('legouser@mail.com');
    //             browser.sleep(1000);
    //             $('button.btn-confirm').click().then(()=>{
    //                 browser.wait(EC.presenceOf($('.form-group-element.code')),10000);
    //             expect($('.header:nth-child(1)').getText()).toEqual('Activate Code');   
    //                             })
    //                         })
    //                     })
    //                 })
    //             })
    //         });
    //     });
    // })

});