require('../utilities/CustomLocators.js');
var SupportPage=function(){
    this.AllButton=element(by.css(".contact-us__main-contact"));
    this.FieldText=element.all(by.css(".main-option>div:nth-child(1) p"));
    this.emailButton=element(by.linkText("SEND EMAIL"));
    this.mailButton=element(by.css('span[class=arrow-btn]'));
    this.goBack=element.all(by.css(".contact-us-close.btn.btn-default>i:nth-child(1)")).first()
    this.message=element(by.css('div[class="extra  extra-small ng-hide"]'));
    this.Formlabel=element.all(by.css("label[class='control-label']"))
    this.nextButton=element(by.css(".btn.btn-default.pull-right"))
    this.topic=$$(".repeater-list.list.list-grid.topics-list>li")  
    this.digit=function(age){
        var a=element(by.name("contactUsAgeField"))
        return a.sendKeys(age)
    };
    this.country=function(countryName){
        var c=element.all(by.css(".form-control.contact-center-list.ng-pristine.ng-valid"))
        .first().all(by.cssContainingText("option",countryName))
        return c
    };


    this.chosenTopic=function(selectTopic){
            var b=element.all(by.partialLinkText(selectTopic)).first();
            return b
    };
    this.AllCategories=element(by.buttonText("Back to all categories"))
    this.textArea=element(by.id("txtComment"))
};
module.exports=new SupportPage();