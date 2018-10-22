var LoginPage = require('../Pages/loginPage.page.js');
describe('Login page', () => {


    beforeEach(() =>{ 
        browser.waitForAngularEnabled(false);        
        browser.get('https://identity.lego.com/en-US/login/?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D6a34e0d1-1a2d-4ce7-acd6-7d936ed38001%26redirect_uri%3Dhttps%253A%252F%252Fwww.lego.com%252Fglobalnavigationservices%252Fauth%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%26state%3Dc88ff8d90ae4489784d4fb3d7523a54d%26nonce%3D8afc98ea33b84c20ace9a5b293645843%26ui_locales%3Den-us%26appContext%3Dfalse%26adultexperience%3Dtrue%26hideExternalLogin%3Dtrue');
        //element(by.css('.l-accept__btn.l-btn.js-accept__btn')).click();
        browser.manage().timeouts().implicitlyWait(30000);

    }); 

   
    
    it('should navigate to login page and be logged in', () => {

        LoginPage.userNameBox.click().sendKeys('Mery1609@icloud.com');
        LoginPage.userPasswordBox.click().sendKeys('Safia_014r!');       
        LoginPage.userRememberBox.click(); 
        browser.sleep(3000);       
        LoginPage.userLoginBox.click();  
        browser.sleep(4000);     
     
    });

    it('should display pop-up message if Username & Password inputs are empty', () =>{
        
        LoginPage.userNameBox.click().sendKeys("");
        browser.sleep(4000); 
        LoginPage.userPasswordBox.click().sendKeys("");
        LoginPage.userLoginBox.click();       
        expect(element(by.id('usernameError')).isDisplayed()).toBe(true);
       

    });

    it('should validate "Having trouble logging in" link is shown and window pop-ups', () =>{
        
        expect(element(by.css('.login-trouble>a')).isDisplayed()).toBe(true);
    
    });

     it('should validate resetting Username when email address is provided', () =>{
        
        
        LoginPage.loginTroubleBox.click();
        browser.sleep(2000);
        element(by.css('.label-forgotusername')).click();
        browser.sleep(3000);
        element(by.css('input[placeholder="Your email address"]')).click().sendKeys('Mery1609@icloud.com');
        browser.sleep(2000);
        element(by.css('.buttons')).click();
        browser.sleep(2000);
       

        
    });

      it('should validate resetting Password when email address is provided', () =>{
        
        LoginPage.loginTroubleBox.click();
        browser.sleep(2000);

        LoginPage.forgotPassword.click();
        browser.sleep(2000);
        
        element(by.css("input[placeholder='Your username']")).click().sendKeys('Mery1609@icloud.com');

        browser.sleep(2000);
        LoginPage.submitButton.click();
        browser.sleep(4000);

        
    });

        it('should validate error message if email is not provided for "Forgot username" and "Submit" clicked', ()=>{
        
        LoginPage.loginTroubleBox.click();
        browser.sleep(2000);
        LoginPage.forgotUsername.click();
        browser.sleep(3000);
        element(by.css('input[placeholder="Your email address"]')).click().sendKeys(" ");
        browser.sleep(5000);
        LoginPage.submitButton.click();
        browser.sleep(4000);

    });

    //     it('should navigate to"Create User Account" page and back to Home page', ()=>{
    //     browser.sleep(2000);
    //     element(by.css('.l-accept__btn.l-btn.js-accept__btn')).click();
    //     browser.sleep(2000);
    //     LoginPage.newUserAccount.click();
    //     browser.sleep(3000);
    //     element(by.css('.l-gh__logo.l-logo')).click();
    //     browser.sleep(4000);
    // });

});