require('../utilities/CustomLocators.js');
var Base=require("../utilities/Base.js")
var SupportPage=require('../Pages/support.page.js')
describe("shoud send an email in support page",function(){

 
    beforeEach(function(){
    //browser.manage().timeouts().implicitlyWait(12000);
    browser.get(Base.supportUrl)
    browser.sleep(1000);
    SupportPage.mailButton.click();
    browser.sleep(1000);
    }) 
    it('should be displayed "send email" and " chat now" button',()=>{
        browser.sleep(1000);
        SupportPage.goBack.click()
        browser.sleep(1000);
        //$(".js-accept__btn").click();
        browser.sleep(1000);
        expect(SupportPage.AllButton.isDisplayed()).toBe(true);
        browser.sleep(3000);
    })
  
    it("should be displayed field text ",function(){ 
        SupportPage.goBack.click()
        expect(SupportPage.FieldText.get(0).getText())
      .toEqual("Send us an email and we’ll get back to you as soon as possible.");
      browser.sleep(2000);
    })

    it('should click "send email" button',()=>{
        browser.sleep(2000);

    })
     it('should verify label names',()=>{
    expect(SupportPage.Formlabel.get(0).getText())
    .toEqual("How old are you?")
    browser.sleep(2000);
    expect(SupportPage.Formlabel.get(1).getText())
    .toEqual("Where do you live?")
    browser.sleep(2000);
    })

        
    it("should accept maximum 3 digit ,doesnot shown error message",function(){
       
    var array=[2,24,124]
    for(let i=0;i<array.length;i++){
           SupportPage.digit(array[i])
            browser.sleep(2000);
            expect(SupportPage.message.isDisplayed()).not.toBe(true)
            SupportPage.digit(array[i]).clear();
            browser.sleep(1000);
        }
        
})
it("should be red ,color of the label,if input letters,more than 3 numbers,special charactersor empty,",function(){
    element(by.name("contactUsAgeField")).sendKeys(protractor.Key.SPACE).sendKeys(protractor.Key.ENTER)
    browser.sleep(2000);
     expect(element(by.css(".row.margin-bottom-half.has-error label"))
    .getCssValue("color")).toEqual("rgba(169, 68, 66, 1)")
    browser.sleep(2000);
    
})
it("should select dropdown",function(){        
    SupportPage.country("Turkey").click()
    browser.sleep(4000)
  
})
it("should be enabled 'next button' with valid input",function(){
    SupportPage.digit(15)
    browser.sleep(2000);
    SupportPage.country("Kyrgyz Republic").click()
    expect(SupportPage.nextButton.isEnabled()).toBe(true)
    browser.sleep(2000)
      SupportPage.nextButton.click()
      browser.sleep(2000)
})
})
require('../utilities/CustomLocators.js');
var Base=require("../utilities/Base.js")
var SupportPage=require('../Pages/support.page.js')
describe("shoud choose a topic in support page",function(){
    beforeAll(function(){
        browser.manage().timeouts().implicitlyWait(12000);
        browser.get(Base.secondUrl)
    }) 
    it("should count general topics",function(){
    expect(SupportPage.topic.count()).toEqual(6)
    browser.sleep(2000)
})
    it("should choose spesifc topic and should go to the another page",function(){
    SupportPage.chosenTopic("Building Instructions").click()
    browser.sleep(2000)
})
it("should be displayed error mesage without any comment inside text area",function(){
    browser.manage().timeouts().implicitlyWait(12000);
    element(by.css('button[class="btn  btn-default  pull-right"]')).click()
    browser.sleep(2000)
    expect(element.all(by.css(".topic-write>div>p")).get(1).isDisplayed()).toBe(true)
    browser.sleep(2000)
})

it("should fill out text area for clicking next button",function(){
    SupportPage.textArea.sendKeys("Toys are broken");
    browser.sleep(2000)
    browser.executeScript("arguments[0].scrollIntoView();",
     $('.btn.btn-default.pull-right')).then(function(){
        browser.sleep(3000) 
        $('.btn.btn-default.pull-right').click()
     })
     browser.sleep(1000) 
    
})
    
})