const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../Pages/Login')
//const pagelocators = require('../data/locators.json')


test.describe('All login page tests', ()=> {

  test('Valid login', async ({ page }) => {
    
    await Loginobj.gotoLoginpage();
    await expect (page).toHaveTitle('OrangeHRM')
    await Loginobj.ValidLogin();
  })

  test('invalid login', async({page})=>{
    const Loginobj = new LoginPage(page);
    await Loginobj.gotoLoginpage();
    await Loginobj.InvaidLogin();
  })

  test.skip('Social Links test', async({page})=>{

  })

  test.only('Forget password page test', async({page})=>{
    const Loginobj = new LoginPage(page);
    await Loginobj.gotoLoginpage();
    await Loginobj.ForgetPassowrd();

  })

})