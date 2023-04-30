const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://booknook:Vishal1111@cluster0.xnxlmeg.mongodb.net/booknook?retryWrites=true&w=majority"
).then((res) => console.log("Connected"));