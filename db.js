const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Employe').then(
    console.log("Connect Suusessfully")
)
.catch((error) => {
        console.log("Error in connection" + error)
});

module.exports = mongoose;


