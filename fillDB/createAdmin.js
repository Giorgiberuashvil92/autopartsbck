const Admin = require('../api/models/Admin.model');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Email = 'asd@asd.com';
const Password = 'asdasd';

mongoose.connect('mongodb+srv://gberuashvili92:Berobero12@autoparts.isppw.mongodb.net/Autoparts?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    createAdmin();
});

async function createAdmin() {
    const hash = bcrypt.hashSync(Password, 10);
    try {
        await Admin.deleteMany();
        const admin = await Admin.create({
            email: Email,
            password: hash
        });
        console.log(admin);
    } catch(err) {
        console.log(err);
    }
}