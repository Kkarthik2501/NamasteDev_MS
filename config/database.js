const mongoose = require('mongoose');
const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://namastedev:hQxNtrwbf5IqNWZs@devtinderdb.zwwoqdc.mongodb.net/devTinder')

}
ConnectDB().then(() => {
    console.log('Database Connected');
}).catch((err) => {
    console.log('Database Connection Failed', err);
});
module.exports = ConnectDB