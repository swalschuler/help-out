console.log("LOADED");

Parse.initialize("JYa2rthRq1g5OKVCgXtBUonJhWStISPaPvj72x8n", "w7hrygTyDliHdiSKd88lhEbwCwPqF1e06nR0Ockp");

var hashPass = "|oe)j_8WHDY,#TU4x+LalG";

$("#signup").submit(function(event) { // needs form to have id signup_student and to have jquery, like src links above 
    event.preventDefault();

    console.log("TESTING");

    var firstName = $("#first_name").val();
    var lastName = $("#last_name").val();
    var email = $("#user_email").val();
    var password = $("#user_password").val();


    var user = new Parse.User();

    //var encrypted = CryptoJS.AES.encrypt(password, hashPass); 

    user.set("username", email);
    user.set("password", password); //change to encrypted
    user.set("name1", firstName);
    user.set("name2", lastName);
    user.set("user_email", email);
    user.setACL(new Parse.ACL(user.id));



    user.signUp(null, {
        success: function(user) {

        }, error: function(user, error) {
            console.log("signup error:" + error.message);
        }
    });

});

$("#login").submit(function(event){
    event.preventDefault();

    var name = $("#login_username").val();
    var pass = $("#login_password").val();

    Parse.User.logIn(name, pass, {
        success: function(user){
            var currentUser = Parse.User.current();
            console.log("Login success");
            console.log(currentUser.id + ' - ' + currentUser.get('user_email') + ' ' + currentUser.get('user_type'));
            
            if(currentUser.get('user_type')=="org")
                window.location="org-landing.html";
            else
                window.location="signedinsplash.html";

            //window.location="org-landing.html";
        }, error: function(user, error){
            console.log("Log in error:" + error.message);
        }
    });

});

$("#logout").click(function(event){
    console.log("Log out initiated");
    Parse.User.logOut();
});

$("#tile").mouseover(function){
	
}