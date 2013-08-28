User = function(data) {
    var obj = jQuery.parseJSON(data);
    this.email = obj.email;
    this.username = obj.username;
    this.password = obj.password;

};
User.prototype = {
    email: function() {
        return this.email;
    },
    password: function() {
        return this.email;
    },
    username: function() {
        return this.password;
    },
    validateLogin: function() {
        regex = /^[a-z0-9]{3,15}/i;

        if (this.username === "") {
            return "please enter a username";
        } else if (this.password === "") {
            return "please enter a password";
        } else if (!regex.test(this.username))
        {
            return "invalid username";
        } else {
            return "passed";
        }
    }
};