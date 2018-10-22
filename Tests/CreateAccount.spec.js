var CreateAccountPage=require('../Pages/CreateAccount.page.js');


describe('Create Account', () => {
    var EC = protractor.ExpectedConditions;
    browser.sleep(3000);


    beforeAll(function(){
       browser.waitForAngularEnabled(false);
       browser.get("https://identity.lego.com/en-US/register/?returnUrl=%2Fconnect%2Fauthorize%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Df1704b3e77734134b9a3872a8a9d0e4c%26nonce%3D52d5c9c808cb4367a680698bb27e95ab%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue"); 
       browser.sleep(3000);
       //CreateAccountPage.okButton.click();
      // browser.wait(EC.visibilityOf(CreateAccountPage.hoverOver),12000);
       //browser.actions().mouseMove(CreateAccountPage.hoverOver).perform(); 
       //CreateAccountPage.createAccountLink.click();
       //browser.manage().timeouts().implicitlyWait(30000); 
       
    }),
    

    // it('should display the form for Creating Account', () => {
        
    //     expect(CreateAccountPage.createAccountForm.isDisplayed()).toBe(true);
        
    // });

    it('should list all the labels', () => {
        for(var i=0;i<CreateAccountPage.createAccountLabels.length;i++){
            expect(CreateAccountPage.createAccountLabels.get(i).isDisplayed()).toBe(true);
        }
    });

    it('should require Email Address', () => {
        expect(CreateAccountPage.emailField.getAttribute('required')).toEqual('true');
        browser.sleep(2000);
    });

    it('should require Password ', () => {
        CreateAccountPage.passwordField.click();
        CreateAccountPage.passwordField.sendKeys(protractor.Key.ENTER);
        CreateAccountPage.passwordField.sendKeys(protractor.Key.ENTER);
        expect(CreateAccountPage.passwordError.isDisplayed()).toBe(true);
        browser.sleep(2000);
    });

    it('should require at least 10 characters for password', () => {
        CreateAccountPage.passwordField.sendKeys('123abc');
        CreateAccountPage.passwordField.sendKeys(protractor.Key.ENTER);
        CreateAccountPage.passwordField.sendKeys(protractor.Key.ENTER);
        expect(CreateAccountPage.passwordError.isDisplayed()).toBe(true);
        browser.sleep(2000);
    });

    it('should require Password ', () => {
        expect(CreateAccountPage.confirmPasswordField.getAttribute('required')).toEqual('true');
    });

    it('should require at least 10 characters for password', () => {
        CreateAccountPage.confirmPasswordField.sendKeys('123abc');
        CreateAccountPage.confirmPasswordField.sendKeys(protractor.Key.ENTER);
        CreateAccountPage.confirmPasswordField.sendKeys(protractor.Key.ENTER);
        expect(CreateAccountPage.password2Error.isDisplayed()).toBe(true);
        browser.sleep(2000);
    });

    it('should require Date of Birth ', () => {
        CreateAccountPage.birthMonth.click();
        CreateAccountPage.birthDay.click();
        CreateAccountPage.birthYear.click();
        browser.sleep(2000);
  
    });

    
    it('should require Country ', () => {      
        browser.manage().timeouts().implicitlyWait(30000); 
        //CreateAccountPage.okButton.click();
     // browser.sleep(2000);
      browser.manage().timeouts().implicitlyWait(30000); 
      CreateAccountPage.country.click();
      browser.sleep(2000);
      CreateAccountPage.nextButton.click();
      browser.sleep(2000);
     
    expect(CreateAccountPage.countryError.getText()).toContain('Country is req');
       
    });

    it('should require the checkbox for accepting terms and conditions ', () => {
        //browser.executeScript("window.scrollTo(0,document.body.scrollHeight)")
        //browser.executeScript("arguments[0].scrollIntoView();",CreateAccountPage.checkbox);
        CreateAccountPage.checkbox.click();
        browser.sleep(3000);
    });

    it('should navigate to Account Login page from Create User Account page', () => {
        CreateAccountPage.linkToLogin.click();
        expect(browser.getTitle()).toEqual('LEGO.com Login to your LEGO Account');
        browser.sleep(3000);
        browser.navigate().back();
        browser.sleep(2000);
    });

    it('should navigate to help page', () => {        
        CreateAccountPage.helpLink.click();
        browser.sleep(2000);
        expect(CreateAccountPage.helpTitle.getText()).toEqual("THINGS TO KEEP IN MIND WHEN CREATING YOUR LEGO® ACCOUNT");
        CreateAccountPage.closeHelp.click();
        browser.sleep(2000);
    });

    it('should display the image at the end of the page', () => {
        expect(CreateAccountPage.image.isDisplayed()).toBe(true);
    });

    it('should check "Next" button', () => {
        expect(CreateAccountPage.nextButton.isEnabled()).toBe(true);
        
    });


});
