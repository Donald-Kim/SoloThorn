var thornObjects ={}
module.exports = {
    beforeEach:browser => {
        thornObjects=browser.page.thornObjects()
    //Test Preconditions
        browser.url("https://www.thorn.org/")
    },
    after: browser => {
            browser.end()          
    },
    // The following tests will be to see if we can navigate to each page with out error
    "Homepage": browser => {
        thornObjects.click('@homepage')
        thornObjects.waitForElementPresent('@pageHeader')
    },
    "The Issue Page": browser => {
        thornObjects.moveToElement('@issues', 10, 10)
        thornObjects.click('@issues')
        .waitForElementVisible('@pageHeader', 10000);
        thornObjects.waitForElementPresent('@pageHeader')
    },
    "The Issue Overview": browser => {
        thornObjects.moveToElement('@issues', 10, 10)
        .api.mouseButtonClick('@issuesOV')
        thornObjects.waitForElementPresent('@pageHeader')
    },
    "The Issue Child Pornography": browser => {
        thornObjects.moveToElement('@issues', 10, 10)
        .api.mouseButtonClick('@childPorn')
        thornObjects.waitForElementPresent('@pageHeader')
    },
    "The Issue Child Sex Trafficking ": browser => {
        thornObjects.moveToElement('@issues', 10, 10)
        .api.mouseButtonClick('@childTraf')
        thornObjects.waitForElementPresent('@pageHeader')
    },
    "The Issue Research": browser => {
        thornObjects.moveToElement('@issues', 10, 10)
        .waitForElementVisible('@research')
        .api.mouseButtonClick('@research')
        thornObjects.waitForElementPresent('@pageHeader')
    },
    "The Issue Sextortion": browser => {
        thornObjects.moveToElement('@issues', 10, 10)
        .waitForElementVisible('@sextortion')
        .api.mouseButtonClick('@sextortion')
        thornObjects.waitForElementPresent('@pageHeader')
    },
    "The Work Page": browser => {
        thornObjects.click('@work')
        browser.execute('scrollTo(0,3000)')
        thornObjects.waitForElementPresent('@workHeader')
    },
    "The Work Overview": browser => {
        thornObjects.moveToElement('@work', 10, 10)
        .waitForElementVisible('@workOV')
        .api.mouseButtonClick('@workOV')
        browser.execute('scrollTo(0,3000)')
        thornObjects.waitForElementPresent('@workHeader')
    },
    "The Work Spotlight": browser => {
        thornObjects.moveToElement('@work', 10, 10)
        .waitForElementVisible('@spotlight')
        .click('@spotlight')
        thornObjects.waitForElementPresent('@pageHeader')
    },
    "The Work Safer": browser => {
        thornObjects.moveToElement('@work', 10, 10)
        .waitForElementVisible('@safer')
        .api.mouseButtonClick('@safer')
        thornObjects.waitForElementPresent('@safeHeader')
    },
    "About Us Page": browser => {
        thornObjects.click('@aboutUs')
        thornObjects.waitForElementPresent('@usHeader')
    },
    "About Us Overview": browser => {
        thornObjects.moveToElement('@aboutUs', 10, 10)
        .waitForElementVisible('@aboutOV')
        .api.mouseButtonClick('@aboutOV')
        browser.execute('scrollTo(0,3000)')
        thornObjects.waitForElementPresent('@usHeader')
    },
    "About Us Partnerships": browser => {
        thornObjects.moveToElement('@aboutUs', 10, 10)
        .waitForElementVisible('@partners')
        .click('@partners')
        browser.execute('scrollTo(0,3000)')
        thornObjects.waitForElementPresent('@partnerHeader')
    },
    "About Us FAQs": browser => {
        thornObjects.moveToElement('@aboutUs', 10, 10)
        .waitForElementVisible('@faqs')
        .click('@faqs')
        browser.execute('scrollTo(0,3000)')
        thornObjects.waitForElementPresent('@faqsHeader')
    },
    "Get Involved Page": browser => {
        thornObjects.click('@getInvolved')
        thornObjects.waitForElementPresent('@pageHeader')
    },
    "Blog Page": browser => {
        thornObjects.click('@blog')
        thornObjects.waitForElementPresent('@blogHeader')
    },
    "We're Hiring Page": browser => {
        thornObjects.click('@hiring')
        browser.execute('scrollTo(0,3000)')
        thornObjects.waitForElementPresent('@hireHeader', 10000);
    },

}