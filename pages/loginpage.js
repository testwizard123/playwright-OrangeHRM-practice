class LoginPage{
    constructor(page){
        this.page = page;
        this.usernameField = page.getByPlaceholder('Username');
        this.passwordField=page.getByPlaceholder('Password');  

    }
}