var ShopPage=require('../Pages/Shop.page.js');
describe('Shop Page functionalities of Lego.com',()=>{
beforeAll(()=>{
    browser.waitForAngularEnabled(false);
    browser.get('https://shop.lego.com/en-US/');
     
})
beforeEach(()=>{
    browser.manage().timeouts().implicitlyWait(10000); 
})
    var b;
    var count1=0;
    var count2=0;

    // it('1_should display shop link and click shop link', () => {
    //     browser.get('https://www.lego.com/en-us');
    //     expect(ShopPage.shopLink.isDisplayed()).toBe(true);
    //     ShopPage.shopLink.click();
     
    // });

    // it('2_should display alert and confirm alert ', () => {
    //     element(by.linkText('Continue')).click();
    //     browser.sleep(2000);
    //     $('.cookie-banner__accept-button').click();

    // });

    it('3_should display and click on "Exclusives',()=>{
        $('#main-bar-dropdown-exclusives a').click();
        browser.sleep(2000);
        element(by.css("li:nth-child(3) > a > div.exclusives__link-item-label > span")).click();
        browser.sleep(2000);

    })

    it('4_should click "PRICE" and select "$75 - $100 [4]"', () => {
        browser.executeScript("window.scrollBy(810, 550)");

        expect(ShopPage.priceLink.isDisplayed()).toBe(true);
        ShopPage.priceLink.click();
        browser.sleep(4000)
        ShopPage.desiredRange.getText() .then((a) => {
            b=a.slice(12,13)
            b=parseInt(b)
        });
        ShopPage.desiredRange.click()
        browser.sleep(4000)

    });

    it('5_should display all the pruducts and click on a product', () => {
        browser.executeScript("window.scrollBy(810, 500)");

        ShopPage.displayCheck.count().then((result) => {
            if(result==b){
                expect(ShopPage.displayCheck.isDisplayed()) .toEqual([true,true,true,true])
            }
        });
    });  

    it('6_should click on a specific product', () => {
        browser.executeScript("window.scrollBy(810, 300)");


        ShopPage.displayCheck.getText() .then((displayedItems) => {
        
        for(x of displayedItems){
            if(x=="MINI Cooper"){
                ShopPage.displayCheck.get(count1).click()
            }
            count1++;
        }
        });
        browser.sleep(2000)
        ShopPage.addtoBag2.click();
        browser.sleep(2000)

    });
    it('7_should click on "Search" Area and Write a product name', () => {
        expect(ShopPage.searchButton.sendKeys("Magical Creatures"));
        ShopPage.searchButton.sendKeys(protractor.Key.ENTER)
        browser.sleep(4000)
        browser.executeScript("window.scrollBy(810, 550)");
        $$('.product-leaf__title').get(0).getText() .then((nameOfProduct) => {
            if(nameOfProduct.includes('Magical Creatures')==true){
            // console.log('This is the right product that you want to buy.')
            }
        })
        ShopPage.desiredProduct.click();
        browser.sleep(2000)
    });

    it('8_should click on next to show other images of the product and should click on "ADD TO BAG" button', () => {

        ShopPage.numOfClick.count().then((result) => {
            for(i=0;i<result-1;i++){

                ShopPage.nextButton.click();
                browser.sleep(500)
            }
        })
        ShopPage.addToBag1.click();
        browser.sleep(1000);

    });
    it('9_should show an error message if item cannot be found', () => {
        ShopPage.shopButton.click();
        ShopPage.searchButton.sendKeys("Casper");
        ShopPage.searchButton.sendKeys(protractor.Key.ENTER);
        browser.sleep(3000)
        if(ShopPage.errorMessage.isDisplayed()==true){
            console.log("Error message is shown")

        }
        
       

    });
    it('10_should click on "MY BAG" and Edit/ Checkout', () => {
        ShopPage.myBagButton.click();
        browser.sleep(1000);
        ShopPage.editCheckoutButton.click();
        browser.sleep(4000);
    });

    it('11_should remove a product from the cart',()=>{
        ShopPage.bagItems.getText() .then((displayedBagItems) => {    
            for(y of displayedBagItems){
                if(y=="MINI Cooper"){
                    ShopPage.removeButton.get(count2).click();
                }
                count2++;
            }
        });
        browser.sleep(4000);

            
    });
    it('12_should display and click on Checkout', () => {
        ShopPage.checkoutButton.click();
        browser.sleep(3000)
    });




})