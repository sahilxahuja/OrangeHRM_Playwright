const {expect} = require('@playwright/test')
const pagelocators = require('../data/locators.json')
const test_data = require('../data/test_data.json')

exports.LoginPage = class Loginpage{
    constructor(page){
        this.page = page;
        this.username = pagelocators.loginPage.usernameField;
        this.password = pagelocators.loginPage.passwordField;
        this.logintbn = pagelocators.loginPage.submitButton;   
    }

    async gotoLoginpage(){

        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    }


    async ValidLogin(){
        const user = test_data.Login;
        await this.page.fill(this.username,user.username)
        await this.page.fill(this.password, user.password)
        await this.page.click(this.logintbn);
        
    }
    
    async InvaidLogin(){
        const user = test_data.InvalidLogin;
        await this.page.fill(this.username,user.username)
        await this.page.fill(this.password, user.password)
        await this.page.click(this.logintbn);

    }

    async SocialLinks(){
        
        await this.page.click(pagelocators.loginPage.facebook_icon)
    }

    async ForgetPassowrd(){
        await this.page.click(pagelocators.loginPage.forgetpassword)
        const userdata = test_data.Login;
        await this.page.fill(this.username, userdata.username )

    }
}


