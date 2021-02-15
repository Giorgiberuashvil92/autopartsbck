const User = require('../models/User.model');


module.exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        for(let i=0; i<users.length; i++){
            users[i] = {
                _id: users[i]._id,
                email: users[i].email,
                username: users[i].username,
            }
        }
        res.status(200).json(users);
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Database error' });
    }
}

module.exports.deleteUser = async (req, res, next) => {
    try {
        await User.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'Successfuly deleted' });
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Database error' });
    }
}