const User = require("../models/user");

module.exports.profile = function (req, res) {
    return res.render("user_profile", {
        title: "User page",
    });
};

// render the sign in page
module.exports.signIn = function (req, res) {
    return res.render("user_sign_in", {
        title: "Sign In",
    });
};
// render the sign up page
module.exports.signUp = function (req, res) {
    return res.render("user_sign_up", {
        title: "Sign Up",
    });
};

// get the sign up data
module.exports.create = function (req, res) {
    console.log(req.body);
    if (req.body.password != req.body.confirm_password) {
        return res.redirect("back");
    }
    User.findOne({ email: req.body.email })
        .then((data) => {
            if (!data) {
                // create user
                User.create(req.body)
                    .then((data) => {
                        console.log(data);
                        return res.redirect("/user/sign-in");
                    })
                    .catch((error) => {
                        console.log("error while creating user");
                    });
            } else {
                return res.redirect("back");
            }
        })
        .catch((error) => {
            console.log("error in finding user while sign up");
        });
};

// get the sign in data
module.exports.createSession = function (req, res) {
    // TODO later
};
