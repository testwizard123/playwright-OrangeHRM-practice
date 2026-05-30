class LoginPage{
    constructor(page){
        this.page = page;
        this.usernameField = page.getByPlaceholder('Username');
        this.passwordField=page.getByPlaceholder('Password'); 
        this.loginbtn = page.getByRole('button',{name:'Login'});
    }
    async goto (){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    async enterUserNamefield(uname){
        await this.usernameField.fill(uname)
    }
    async enterPasswordfield(pwd){
        await this.passwordField.fill(pwd)
    }
   async clickLoginBtn() {
    await this.loginbtn.click();   //  use .click()
  }
}
module.exports ={LoginPage};