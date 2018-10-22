let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    directConnect: true,
     //which browser would you want to use for your tests?
    capabilities: {'browserName': 'chrome'},
 
    //the name of your test scripts file
    //specs: ['../Tests/legotestpage.js'],
    restartBrowserBetweenSuites: false, 
     suites:{
    //   smoke:['../Tests/LegoTestPage.js','../Tests/CreateAccount.spec.js'],
     Kanat:['../Tests/LegoTestPage.js'],  
     Esra:['../Tests/Video.spec.js'],
     Mery:['../Tests/loginPage.spec.js'],
     Kadriye:['../Tests/CreateAccount.spec.js'],
     Mevlude:['../Tests/Shop.spec.js'],
     Shuhrat1:['../Tests/LegoLifeApp.spec.js'],
     Shuhrat2:['../Tests/LegoSignUp.spec.js'],
     Feride:['../Tests/Support.spec.js'],
     Amy:['../Tests/Games.spec.js'],
      
     //regression:['../Tests/*.js']
     },
    //which BDD framework we're going to use
    framework: 'jasmine2',
      
    onPrepare: function(){
        browser.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter({
          displayFailuresSummary: true,
          displayFailuredSpec: true,
          displaySuiteNumber: true,
          displaySpecDuration: true
        }));

        jasmine.getEnv().addReporter(new HtmlReporter({
          baseDirectory: '../report/screenshots',
          preserveDirectory:false,
          screenshotsSubfolder:'images',
          jsonsSubfodler:'jsons',
          docName:'Cybertek-report.html'
       }).getJasmine2Reporter());

        
      },
      
      frameworks: ['jasmine', 'jasmine-spec-tags'],
        
      client: {
          tagPrefix: '@',
          tags: 'smoke',
          skipTags: 'slow'
      },

  jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 500000,
      print: function () { }

  }


    };