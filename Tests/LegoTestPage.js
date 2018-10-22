require('../Utilities/customlocators.js');
//var Base=require('../Utilities/base.js');
var HomePage=require('../Pages/HomePage.js');
var CreateAccountPage=require('../Pages/CreateAccount.page.js');
var EC = protractor.ExpectedConditions;

describe('Home Page Lego',()=>{
        beforeAll(()=>{
        //browser.waitForAngularEnabled(false);
        browser.get('https://www.lego.com/en-us');
        browser.sleep(1000);
        isPresentWait(HomePage.cookieButton);
        HomePage.cookieButton.click();
             
    })
  
function isPresentWait(value){
let EC = ExpectedConditions;
let condition = EC.presenceOf(value);
browser.wait(condition, 3000)
}
      it('Should verify title',()=>{
        //browser.switchTo().alert().dismiss();
        
         expect(browser.getTitle()).toEqual('LEGO.com US - Inspire and develop the builders of tomorrow');
      })

      it("should verify and list site map list",()=>{
          expect(HomePage.SiteMaplist.first().isDisplayed()).toBe(true);
          expect(HomePage.SiteMaplist.count()).toEqual(HomePage.listSiteMap.length); 
          HomePage.SiteMaplist.first().getText().then(function(array){
              for(let i=0; i<array.lenght; i++){
                  expect(array[i]).toEqual(HomePage.listSiteMap[i]);
              }
          })
               
      })
      it('should click Shop tag and Check',()=>{
          isPresentWait(HomePage.shopPage);
          HomePage.shopPage.click();
          browser.sleep(2000);
          expect(HomePage.shopPagePopUp.isDisplayed()).toBe(true);
          expect(HomePage.shopPageWarn.getText()).toEqual('Please note that you must be over 18 years old or with an adult to buy online.')
          HomePage.shopPagePopUpClose.click();
        })

      it('should verify 5 images displayed in mainstage',()=>{
          expect(HomePage.slidePictures.count()).toEqual(5);
        
      })
      it('should display Video in main page and run 5s',()=>{
          expect(HomePage.videoFrame.isDisplayed()).toBe(true);
          if(HomePage.videoRunButton.isDisplayed){
            HomePage.videoRunButton.click();
            browser.sleep(5000);
            HomePage.videoPauseButton.click();

          }
      })

      it('should check display top menu items and verify for each',()=>{
          expect(HomePage.mainDisplayMenus.isDisplayed()).toEqual([ true, true, true, true, true, true, true ]);
          expect(HomePage.mainDisplayMenus.count()).toEqual(7);
          HomePage.mainDisplayMenus.getText().then(function(list){
            for(let i=0; i<list.lenght; i++){
                expect(list[i]).toEqual(HomePage.listMainDislayMenus[i]);
            }
          })

      })
      it('List countries and drop down and Verify',()=>{
          HomePage.selectLanguage('us');
          HomePage.listCountries.getText().then(function(list){
            for(let i=0; i<list.lenght; i++){
                expect(element(by.linkText(list[i])).isDisplayed).toBe(true);
            }
          });
        })

     it('Verify Web site changes language Italian and get Back to English',()=>{
        HomePage.selectWebLanguage('Italia');  
        browser.sleep(3000);
        
        })

    })