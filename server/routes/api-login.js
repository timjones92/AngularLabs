module.exports = function(app, path) {
    app.get('/login', function(req,res) {
        let filepath = path.resolve('../src/app/login/login.component.html');
        res.sendFile(filepath);
    });

    // class User {
    //     constructor(username, birthdate, age, email, password, valid){
    //         this.username = username;
    //         this.birthdate = birthdate;
    //         this.age = age;
    //         this.email = email;
    //         this.password = password;
    //         this.valid = valid;
    //     }
    // }

    // user1 = [
    //     new User("cap", "27/02/1993", 26, "cap@avengers.com", "123456", true),
    //     new User("ironman", )
    // ]
}