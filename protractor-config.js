exports.config = {
    
    capabilities: {
    browserName: 'chrome',
        chromeOptions: {
            args: ["window-size=1600,900", "incognito"]
        }
    },

    framework: 'jasmine2',
    
    specs: ['./test/spec/initial-spec.js'],

    onPrepare() {
        browser.waitForAngularEnabled(false);

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
    }
};