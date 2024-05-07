const mongoose = require('mongoose');

const dbConnect = async () => {
    console.log("Function Called")
    try {
        mongoose.connect('mongodb+srv://milanbavishi:qCNd3PlogiBmXZeL@cluster0.jfks5xm.mongodb.net/?retryWrites=true&w=majority')
            .then(() => { 
                console.log('DB Connected')
            }) 
            .catch((err) => {
                console.log('DB Does not Connected');
            })

    } catch (errr) {
        console.log("Can  not connected to DB Some Internal server Err")
    }
}

module.exports = dbConnect;
