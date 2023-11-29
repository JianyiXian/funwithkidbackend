const User = require('../models/user');

// Create a new user
const signup = async (req, res) => {
    try {
        // Get the new user from the request
        const newUser = new User(req.body);

        // Save it in the database
        let user = await newUser.save();
        user = user.toObject();

        res.send(user);

    } catch (err) {
        res.status(500).send(err)
    }
}

// User log in
const login = async (req, res) => {

    // Get the information from the log in user
    const { email, password } = req.body;

    try {
        // Find the user with the same email
        let existingUser = await User.findOne({ email: email });

        if (!existingUser || existingUser.password !== password) {
            res.status(401).send('Invalid credentials')
        } else {
            res.status(200).send(existingUser)
        }
    } catch (err) {
        res.status(500).send(err)
    }




}

exports.signup = signup;
exports.login = login;
