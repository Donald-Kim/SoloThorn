//thorn Objects
var thornCommands = {
    //Click by text
    clickText: function (text) {
        this.api.useXpath()
        this.click(`//*[text()="${text}"]`)
        this.api.useCss()

        return this
    },
}
//Page Objects
module.exports = {
    url: "https://www.thorn.org/",
    commands: [thornCommands],
    elements: {

        issues: '#menu-item-1228',
        work: '#menu-item-1225',
        aboutUs: '[id="menu-item-2682"]',
        getInvolved: '[id="menu-item-1159"]',
        blog: '[id="menu-item-2683"]',
        hiring: '[id="menu-item-2815"]',
        homepage: '[id="logo"]',
        pageHeader: '[class="vc_custom_heading accent-line"]',
        workHeader: '[class="vc_custom_heading max-width wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp animated wpb_start_animation"]',
        safeHeader: '[class="vc_custom_heading"]',
        workOV: "#menu-item-3434",
        issuesOV: "#menu-item-2944",
        usHeader: '[class="vc_custom_heading"]',
        faqsHeader: '[class="vc_custom_heading"]',
        blogHeader: "#categories-4",
        

        //XPath Selectors
        
        childPorn: {
            selector: '(//li[@class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2743"])[1]',
            locateStrategy: 'xpath'
        },
        childTraf: {
            selector: '(//li[@class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2744"])[1]',
            locateStrategy: 'xpath'
        },
        research: {
            selector: '(//li[@class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2747"])[1]',
            locateStrategy: 'xpath'
        },
        sextortion: {
            selector: '(//li[@class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3438"])[1]',
            locateStrategy: 'xpath'
        },
        safer: {
            selector: '(//li[@class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3436"])[1]',
            locateStrategy: 'xpath'
        },
        aboutOV: {
            selector: '(//li[@class="overview menu-item-object-page menu-item menu-item-type-post_type menu-item-type-custom menu-item-object-custom menu-item-2945"])[1]',
            locateStrategy: 'xpath'
        },
        partners: {
            selector: '(//a[@href="https://www.thorn.org/partnerships/"])[1]',
            locateStrategy: 'xpath'
        },
        faqs: {
            selector: '(//a[@href="https://www.thorn.org/child-sexual-exploitation-and-technology/faqs/"])[1]',
            locateStrategy: 'xpath'
        },
        hireHeader: {
            selector: '(//h2[@class="vc_custom_heading accent-line coral"])[1]',
            locateStrategy: 'xpath'
        },
        spotlight: "#menu-item-3435",
        partnerHeader: '[id="companies"]'
        
        
    }
    
}