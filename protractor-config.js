let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
    
    capabilities: {
    browserName: 'chrome',
        chromeOptions: {
            args: ["incognito"]
        }
    },

    framework: 'jasmine2',
    
    specs: ['./test/spec/initial-spec.js'],

    onPrepare() {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        browser.manage().timeouts().setScriptTimeout(60000);

        browser.waitForAngularEnabled(false);

        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailedSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true,
        }));

        return global.browser.getProcessedConfig().then(function (config) {
            var Jasmine2HtmlReporter = require('./index.js');

            jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
                savePath: './test/reports/',
                fixedScreenshotName: true,
                cleanDestination: true
            }));
        });        
    },
    
    jasmineNodeOpts: {
        showColors: true, 
        defaultTimeoutInterval: 40000,
        silent: false,
        print: function() {
        }
    }
};