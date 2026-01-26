const mongoose = require('mongoose');
const ConnectDB = async () => {
    await mongoose.connect(process.env.DATABASE_URL )

}
ConnectDB().then(() => {
    console.log('Database Connected');
}).catch((err) => {
    console.log('Database Connection Failed', err);
});
module.exports = ConnectDB